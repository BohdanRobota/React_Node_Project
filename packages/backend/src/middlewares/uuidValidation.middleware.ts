import { NextFunction, Response, Request } from 'express';
import { validate as uuidValidate } from 'uuid';
import ApiError from '../error/ApiError';

export const uuidValidationMiddleware =
  () => async (req: Request, _: Response, next: NextFunction) => {
    const { id } = req.params;
    const isValid = uuidValidate(id);
    if (!isValid) throw ApiError.badRequest('Inncorrect uuid');
    next();
  };
