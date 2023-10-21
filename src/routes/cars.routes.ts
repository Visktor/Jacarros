import { Router } from "express";
import getAllCarsController from "../controllers/cars/getAll";
import getAllCarsService from "../services/cars/getAll";

const CarRouter = Router();

CarRouter.use("/cars/get", getAllCarsController, getAllCarsService);

export default CarRouter;
