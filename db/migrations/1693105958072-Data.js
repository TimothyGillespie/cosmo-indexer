module.exports = class Data1693105958072 {
    name = 'Data1693105958072'

    async up(db) {
        await db.query(`CREATE TABLE "transfer" ("id" character varying NOT NULL, "from" text NOT NULL, "to" text NOT NULL, "timestamp" numeric NOT NULL, "objekt_id" character varying, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_98d4c0e33193fdd3edfc826c37" ON "transfer" ("objekt_id") `)
        await db.query(`CREATE INDEX "IDX_be54ea276e0f665ffc38630fc0" ON "transfer" ("from") `)
        await db.query(`CREATE INDEX "IDX_4cbc37e8c3b47ded161f44c24f" ON "transfer" ("to") `)
        await db.query(`CREATE INDEX "IDX_70ff8b624c3118ac3a4862d22c" ON "transfer" ("timestamp") `)
        await db.query(`CREATE TABLE "objekt" ("id" character varying NOT NULL, "serial" integer NOT NULL, "collection_id" character varying, CONSTRAINT "PK_a50fda223abd7f6ae55f2cf629f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_cc0196669f13f5958a307824a2" ON "objekt" ("collection_id") `)
        await db.query(`CREATE TABLE "collection" ("id" character varying NOT NULL, "thumbnail" text NOT NULL, "front" text NOT NULL, "back" text NOT NULL, "artists" text array NOT NULL, "class" text NOT NULL, "member" text NOT NULL, "season" text NOT NULL, "number" text NOT NULL, "text_color" text NOT NULL, "timestamp" numeric NOT NULL, CONSTRAINT "PK_ad3f485bbc99d875491f44d7c85" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_d01899107849250643b52f2324" ON "collection" ("class") `)
        await db.query(`CREATE INDEX "IDX_76242b6e82adf6f4ab4b388858" ON "collection" ("member") `)
        await db.query(`CREATE INDEX "IDX_81f585f60e03d2dc803d8a4945" ON "collection" ("season") `)
        await db.query(`CREATE INDEX "IDX_caa038e191d0099a8795fe4d35" ON "collection" ("number") `)
        await db.query(`CREATE INDEX "IDX_7ea39ec05f738471a3e62b4181" ON "collection" ("timestamp") `)
        await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_98d4c0e33193fdd3edfc826c37f" FOREIGN KEY ("objekt_id") REFERENCES "objekt"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "objekt" ADD CONSTRAINT "FK_cc0196669f13f5958a307824a2b" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "transfer"`)
        await db.query(`DROP INDEX "public"."IDX_98d4c0e33193fdd3edfc826c37"`)
        await db.query(`DROP INDEX "public"."IDX_be54ea276e0f665ffc38630fc0"`)
        await db.query(`DROP INDEX "public"."IDX_4cbc37e8c3b47ded161f44c24f"`)
        await db.query(`DROP INDEX "public"."IDX_70ff8b624c3118ac3a4862d22c"`)
        await db.query(`DROP TABLE "objekt"`)
        await db.query(`DROP INDEX "public"."IDX_cc0196669f13f5958a307824a2"`)
        await db.query(`DROP TABLE "collection"`)
        await db.query(`DROP INDEX "public"."IDX_d01899107849250643b52f2324"`)
        await db.query(`DROP INDEX "public"."IDX_76242b6e82adf6f4ab4b388858"`)
        await db.query(`DROP INDEX "public"."IDX_81f585f60e03d2dc803d8a4945"`)
        await db.query(`DROP INDEX "public"."IDX_caa038e191d0099a8795fe4d35"`)
        await db.query(`DROP INDEX "public"."IDX_7ea39ec05f738471a3e62b4181"`)
        await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_98d4c0e33193fdd3edfc826c37f"`)
        await db.query(`ALTER TABLE "objekt" DROP CONSTRAINT "FK_cc0196669f13f5958a307824a2b"`)
    }
}
