import Joi from 'joi';
import { ITodo } from '../types/todos.type';

export const todoValidate = (data: ITodo) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(5).required(),
    isComplete: Joi.boolean(),
    isPrivate: Joi.boolean()
  });

  return schema.validate(data);
};
