import { Request, Response, NextFunction } from 'express';
import { EntityTarget, ObjectLiteral, getRepository } from 'typeorm';
import ApiError from '../error/ApiError';

export const isExist =
  (entity: EntityTarget<ObjectLiteral>) =>
  async (req: Request, _: Response, next: NextFunction) => {
    const { id } = req.params;
    const repository = getRepository(entity);
    const response = await repository.findOneBy({ id });
    if (!response) {
      throw ApiError.badRequest('There are no entities with such id');
    }
    next();
  };
