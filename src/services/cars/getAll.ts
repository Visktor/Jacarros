import { AppDataSource } from "../../database/config/DataSource";
import Cars from "../../database/entities/Cars";
import { BackendResponse } from "../../shared/types/global";

export default function getAllCarsService(): BackendResponse {
  try {
    const carsTable = AppDataSource.getRepository(Cars);
    const result = carsTable.find();

    return {
      success: true,
      data: result,
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: err,
      message:
        "Erro inesperado ao buscar veículos disponíveis. Tente novamente mais tarde.",
    };
  }
}
