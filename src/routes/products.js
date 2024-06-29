import express from "express";
import { addProduct, getAllProducts } from "../controllers/products.js";

export const productRouter = express.Router();

productRouter.post("/", addProduct);

productRouter.get("/", getAllProducts);
