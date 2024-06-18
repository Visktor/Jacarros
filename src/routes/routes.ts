import { Router } from "express";
import objectValidation from "../shared/validation/zodObjectValidator";
import z from "zod";
import logger from "#shared/logger/main";

const router = Router();

router.use("/", async (req, res) => {
  res.send("PrimeCars Api v0.1");
});

router.use("/login", async (req, res) => {
  const { email, password } = req.query;

  const validationResult = objectValidation(
    { email, password },
    {
      email: z.string().email(),
      password: z.string(),
    },
  );

  if (!validationResult.success) {
    logger.error(``);
    res.status(400).json({
      success: false,
      message: "Email ou senha inválidos, tente novamente mais tarde.",
      erro: validationResult.error,
    });
  }
});
