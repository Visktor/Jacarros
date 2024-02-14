import { Router } from "express";
import zodValidateObject from "../shared/validation/zodObjectValidator";
import { z } from "zod";
import usersGetOne from "../services/users/getone";

const userRoute = Router();

userRoute.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  const validationResult = zodValidateObject(
    {
      id: id,
    },
    {
      id: z.coerce.string().uuid(),
    }
  );

  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      error: "Invalid request structure.",
    });
  }

  const result = await usersGetOne(validationResult.data.id);
  return res.json(result);
});
