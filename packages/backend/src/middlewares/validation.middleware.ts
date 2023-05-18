import { NextFunction, Response, Request } from 'express';
import ApiError from '../error/ApiError';

export const validationMiddleware =
  (validatorCallback: Function) => async (req: Request, _: Response, next: NextFunction) => {
    const { error } = validatorCallback(req.body);
    if (error) throw ApiError.validationError(error);
    next();
  };
