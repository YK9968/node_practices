import createHttpError from "http-errors";
import Product from "../db/model/Product.js";
import { productsAddShema } from "../middleware/productValidation.js";

export const addProduct = async (req, res, next) => {
  try {
    await productsAddShema.validateAsync(req.body);

    const product = await Product.create(req.body);
    res.status(201).json({
      status: 201,
      message: "Success add product",
      data: product,
    });
  } catch (error) {
    const responseError = createHttpError(400, error.message, {
      errors: error.datails,
    });
    next(responseError);
  }
};

export const getAllProducts = async () => {};
