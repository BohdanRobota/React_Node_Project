import { Request, Response, NextFunction } from 'express';
import { EntityTarget, ObjectLiteral, getRepository } from 'typeorm';

export const isExist =
  (entity: EntityTarget<ObjectLiteral>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const repository = getRepository(entity);
      const response = await repository.findOneBy({ id });
      if (!response) {
        return res.status(400).json({ message: 'There are no entities with such id' });
      }
      next();
    } catch (err) {
      return res.status(400).json(err);
    }
  };
