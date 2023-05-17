import { Request, Response, NextFunction } from 'express';

export type IController = (req: Request, res: Response, next: NextFunction) => Promise<any>;
