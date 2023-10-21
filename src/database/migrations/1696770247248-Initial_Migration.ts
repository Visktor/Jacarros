import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1696770247248 implements MigrationInterface {
    name = 'InitialMigration1696770247248'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("ClientID" uuid NOT NULL DEFAULT uuid_generate_v4(), "FullName" character varying(100) NOT NULL, "Email" character varying(100) NOT NULL, "ContactNumber" character varying(18) NOT NULL, "Address" text NOT NULL, CONSTRAINT "PK_7d3e844a3fe96aa32b3adb4d977" PRIMARY KEY ("ClientID"))`);
        await queryRunner.query(`CREATE TABLE "payments" ("PaymentID" uuid NOT NULL DEFAULT uuid_generate_v4(), "ClientID" uuid NOT NULL, "RentalID" uuid, "Amount" double precision NOT NULL, "PaymentDate" date NOT NULL, CONSTRAINT "PK_30246df7f6b96672874fb248aa3" PRIMARY KEY ("PaymentID"))`);
        await queryRunner.query(`CREATE TABLE "payments_rentals" ("RentalID" uuid NOT NULL, "PaymentID" uuid NOT NULL, CONSTRAINT "PK_f8879a3eebd00791241d3b07d62" PRIMARY KEY ("RentalID", "PaymentID"))`);
        await queryRunner.query(`CREATE TABLE "incidents" ("IncidentID" uuid NOT NULL DEFAULT uuid_generate_v4(), "RentalID" uuid NOT NULL, "Description" text NOT NULL, "Cost" double precision NOT NULL, CONSTRAINT "PK_48b2bcb5d104a1dac4642ce04ce" PRIMARY KEY ("IncidentID"))`);
        await queryRunner.query(`CREATE TABLE "rentals" ("RentalID" uuid NOT NULL DEFAULT uuid_generate_v4(), "CarID" uuid NOT NULL, "UserID" uuid NOT NULL, "ClientID" uuid NOT NULL, "StartDate" date NOT NULL, "EndDate" date NOT NULL, "TotalAmount" double precision NOT NULL, CONSTRAINT "PK_8f138f30e6d621407ef743dcee5" PRIMARY KEY ("RentalID"))`);
        await queryRunner.query(`CREATE TABLE "profile" ("ProfileID" uuid NOT NULL DEFAULT uuid_generate_v4(), "Description" text NOT NULL, CONSTRAINT "PK_57b400d47a344d2b080abc34280" PRIMARY KEY ("ProfileID"))`);
        await queryRunner.query(`CREATE TABLE "users" ("UsersID" uuid NOT NULL DEFAULT uuid_generate_v4(), "AdminFlag" boolean NOT NULL, "Email" character varying(100) NOT NULL, "ProfileID" uuid NOT NULL, "StoreID" uuid, CONSTRAINT "PK_58c30ec81a962518bfdb3000eb5" PRIMARY KEY ("UsersID"))`);
        await queryRunner.query(`CREATE TABLE "stores" ("StoreID" uuid NOT NULL DEFAULT uuid_generate_v4(), "CNPJ" character varying(18) NOT NULL, "Email" character varying(100), "Address" text NOT NULL, CONSTRAINT "PK_010f27e553afc183a4a4142f161" PRIMARY KEY ("StoreID"))`);
        await queryRunner.query(`CREATE TABLE "cars" ("CarID" uuid NOT NULL DEFAULT uuid_generate_v4(), "Brand" character varying(20) NOT NULL, "Model" character varying(20) NOT NULL, "Year" date NOT NULL, "Color" character varying(20) NOT NULL, "PricePerDay" double precision NOT NULL, "PricePerMonth" double precision NOT NULL, "IsAvailable" boolean NOT NULL, "StoreID" uuid, CONSTRAINT "PK_012e451fc88189999d70f8f3622" PRIMARY KEY ("CarID"))`);
        await queryRunner.query(`ALTER TABLE "payments" ADD CONSTRAINT "FK_e2e30f654b7ae3a7c143863044f" FOREIGN KEY ("ClientID") REFERENCES "client"("ClientID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payments_rentals" ADD CONSTRAINT "FK_a54877c278be58722d59183d062" FOREIGN KEY ("RentalID") REFERENCES "rentals"("RentalID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payments_rentals" ADD CONSTRAINT "FK_33d33e03fbe38e07de52855a82b" FOREIGN KEY ("PaymentID") REFERENCES "payments"("PaymentID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "incidents" ADD CONSTRAINT "FK_e639cd6de57c21662d79c1030c8" FOREIGN KEY ("RentalID") REFERENCES "rentals"("RentalID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rentals" ADD CONSTRAINT "FK_14065c82a4b2e241b70f5f33924" FOREIGN KEY ("CarID") REFERENCES "cars"("CarID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rentals" ADD CONSTRAINT "FK_a8643c44988d30cfcb29b6ff630" FOREIGN KEY ("ClientID") REFERENCES "client"("ClientID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_a02a3246eccebb522baf4929b03" FOREIGN KEY ("ProfileID") REFERENCES "profile"("ProfileID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_0c9e08eddf6030cf2fb252f4651" FOREIGN KEY ("StoreID") REFERENCES "stores"("StoreID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_63babc72ff43ced36cfb15e9c97" FOREIGN KEY ("StoreID") REFERENCES "stores"("StoreID") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_63babc72ff43ced36cfb15e9c97"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_0c9e08eddf6030cf2fb252f4651"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_a02a3246eccebb522baf4929b03"`);
        await queryRunner.query(`ALTER TABLE "rentals" DROP CONSTRAINT "FK_a8643c44988d30cfcb29b6ff630"`);
        await queryRunner.query(`ALTER TABLE "rentals" DROP CONSTRAINT "FK_14065c82a4b2e241b70f5f33924"`);
        await queryRunner.query(`ALTER TABLE "incidents" DROP CONSTRAINT "FK_e639cd6de57c21662d79c1030c8"`);
        await queryRunner.query(`ALTER TABLE "payments_rentals" DROP CONSTRAINT "FK_33d33e03fbe38e07de52855a82b"`);
        await queryRunner.query(`ALTER TABLE "payments_rentals" DROP CONSTRAINT "FK_a54877c278be58722d59183d062"`);
        await queryRunner.query(`ALTER TABLE "payments" DROP CONSTRAINT "FK_e2e30f654b7ae3a7c143863044f"`);
        await queryRunner.query(`DROP TABLE "cars"`);
        await queryRunner.query(`DROP TABLE "stores"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "profile"`);
        await queryRunner.query(`DROP TABLE "rentals"`);
        await queryRunner.query(`DROP TABLE "incidents"`);
        await queryRunner.query(`DROP TABLE "payments_rentals"`);
        await queryRunner.query(`DROP TABLE "payments"`);
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
