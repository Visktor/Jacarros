import { AppDataSource } from "#database/config/DataSource";
import Users from "#database/entities/Users";
import logger from "#shared/logger/main";
import { BackendResponse } from "src/@types/global";
import { In } from "typeorm";

export default async function getUsersById(
  ids: string[],
): Promise<BackendResponse> {
  const userRepository = AppDataSource.getRepository(Users);
  try {
    const result = await userRepository.find({
      where: { UserID: ids.length > 1 ? In(ids) : ids[0] },
    });
    return {
      success: true,
      data: result,
    };
  } catch (err) {
    logger.error(err);
    return {
      success: false,
      internalError: err,
      frontEndAlert:
        "Houve um erro ao buscar o(s) usuário(s) requisitado(s), tente novamente mais tarde.",
    };
  }
}
