import Joi from 'joi';

const email = Joi.string()
  .email({ tlds: false })
  .required();
const username = Joi.string()
  .pattern(/^(?=[a-zA-Z0-9._]{8,30}$)(?!.*[_.]{2})[^_.].*[^_.]$/)
  .required();
const password = Joi.string()
  .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
  .required();
const date = Joi.date().greater('now').required();
const time = Joi.string().regex(/^([0-9]{2}):([0-9]{2})$/);
const title = Joi.string().min(3).max(30).required();

const models = {
  email,
  username,
  password,
  date,
  time,
  title,
};

// eslint-disable-next-line
export const validate = (model, value) => Joi
  .object({ [model]: models[model] })
  .validate({ [model]: value });
