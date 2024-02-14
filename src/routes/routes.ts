import { Router } from "express";
import zodValidateObject from "../shared/validation/zodObjectValidator";
import z from "zod";

const router = Router();

router.use("/", async (req, res) => {
  res.send("PrimeCars Api v0.1");
});

router.use("/login", async (req, res) => {
  const { email, password } = req.query;

  const validationResult = zodValidateObject(
    { email, password },
    {
      email: z.string().email(),
      password: z.string(),
    }
  );

  if (!validationResult.success) {
    res.json({
      success: false,
      message: "Email ou senha inválidos, tente novamente mais tarde.",
      erro: validationResult.error,
    });
  }


});
