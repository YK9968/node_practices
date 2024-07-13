import createHttpError from "http-errors";
import Joi from "joi";

export const loginValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.number().min(0).required(),
});

export const validateLoginBody = async (req, res, next) => {
    try {
        await loginValidationSchema.validateAsync(req.body,  {
        abortEarly: false,
      });

        next();
    } catch (error) {
        const responseError = createHttpError(400, error.message);
        next(responseError);
    }
};