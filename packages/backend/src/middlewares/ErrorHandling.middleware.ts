import { Response, Request } from 'express';
import { ErrorCodes } from '../enum/errorCodes.enum';
import ApiError from '../error/ApiError';

export const errorHandler = (err: ApiError, req: Request, res: Response) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message, details: err.details });
  }

  return res.status(ErrorCodes.INTERNAL_ERROR).json({ message: 'Unexpected error' });
};
