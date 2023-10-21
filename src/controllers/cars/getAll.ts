import { RequestHandler } from "express";

const getAllCarsController: RequestHandler = (req, res, next) => {
  next()
}

export default getAllCarsController
