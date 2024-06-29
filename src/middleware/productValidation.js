import Joi from "joi";

export const productsAddShema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  price: Joi.number().min(0).required(),
});
