import { NextFunction, Response, Request } from 'express';
import { IController } from '../types/controller.type';

export const tryCatch =
  (controller: IController) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      return next(error);
    }
  };
