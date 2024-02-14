import { AppDataSource } from "../../database/config/DataSource";
import Users from "../../database/entities/Users";

export default async function usersGetOne(id: string) {
  const usersTable = AppDataSource.getRepository(Users);
  const result = await usersTable.findOne({
    where: { UserID: id },
  });
  return result;
}
