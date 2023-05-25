import { Request, Response, NextFunction } from 'express';
import ApiError from '../error/ApiError';
import tokenService from '../services/token.service';
import { TokensEnum } from '../enum/tokens.enum';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      throw new Error();
    }
    const accessToken = authorizationHeader.split(' ')[1];
    if (!accessToken) {
      throw new Error();
    }
    const userData = tokenService.validateToken(accessToken, TokensEnum.ACCESS);
    if (!userData) {
      throw new Error();
    }
    next();
  } catch (err) {
    throw ApiError.unavthorizedError();
  }
};
