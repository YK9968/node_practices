import Product from "../db/model/Product.js";

export const addProduct = async (req,res,next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        status: 201,
        message: "Success add product",
        data: product
    })
};

export const getAllProducts = async () => {

};
