import { AppDataSource } from "../database/config/DataSource";
import Users from "../database/entities/Users";
import bcrypt from "bcrypt";

export default async function loginService(email: string, password: string) {
  const user = await AppDataSource.getRepository(Users).findOneBy({
    Email: email,
  });

  if (!user) {
    return {
      success: false,
      message: "Email ou senha inválidos.",
    };
  }

  bcrypt.compare(password, user.Password, function(err, result) {
    if (err) {
      return {
        success: false,
        error: err,
      };
    }

    if (result === true) {
      return {
        success: true,
      };
    }
  });
}
