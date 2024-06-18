import getUsersById from "#services/users/getById";
import zodError400 from "#shared/utils/zodStatus400Error";
import { Router } from "express";
import { z } from "zod";

const userRoute = Router();

userRoute.get("/users/get-by-id", async (req, res) => {
  const frontendAlert = "Houve um erro ao buscar usuário.";
  const { ids } = req.query;

  const validationResult = z.string().uuid().array().safeParse(ids);

  if (!validationResult.success) {
    zodError400(validationResult.error, req.url);
    return res.json({
      success: false,
      message: frontendAlert,
      error: validationResult.error.issues,
    });
  }

  const serviceResult = await getUsersById(validationResult.data);
  return res.status(serviceResult.success ? 200 : 500).json(serviceResult);
});
