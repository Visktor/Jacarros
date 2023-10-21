import { MigrationInterface, QueryRunner } from "typeorm";

export class AddsRelationUserRental1696775867596 implements MigrationInterface {
    name = 'AddsRelationUserRental1696775867596'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "UsersID" TO "UserID"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME CONSTRAINT "PK_58c30ec81a962518bfdb3000eb5" TO "PK_897a8e0062b8cece58b6cff4e65"`);
        await queryRunner.query(`ALTER TABLE "rentals" ADD CONSTRAINT "FK_50341809270b49a1763d2e93c2e" FOREIGN KEY ("UserID") REFERENCES "users"("UserID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rentals" DROP CONSTRAINT "FK_50341809270b49a1763d2e93c2e"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME CONSTRAINT "PK_897a8e0062b8cece58b6cff4e65" TO "PK_58c30ec81a962518bfdb3000eb5"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "UserID" TO "UsersID"`);
    }

}
