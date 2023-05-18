import Joi from 'joi';
import { CreateTodoDto, UpdateTodoDto } from '../dto/todo';

export const updateTodoValidate = (data: CreateTodoDto) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100),
    description: Joi.string().min(5),
    isComplete: Joi.boolean(),
    isPrivate: Joi.boolean()
  });
  return schema.validate(data);
};

export const createTodoValidate = (data: UpdateTodoDto) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(5).required(),
    isComplete: Joi.boolean().required(),
    isPrivate: Joi.boolean().required()
  });
  return schema.validate(data);
};
