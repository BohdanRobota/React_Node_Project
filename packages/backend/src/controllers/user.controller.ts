/* eslint-disable no-console */

import { Response, Request } from 'express';
import UserService from '../services/user.service';
import { IUserWithToken } from '../types/userWithToken.type';

export class UserController {
  constructor(private userService: typeof UserService) { }

  async getAllUsers(req: Request, res: Response) {
    const users = await this.userService.getAll();
    res.send(users);
  }

  async register(req: Request, res: Response) {
    const { email, password } = req.body;
    const userData = await this.userService.register(email, password);
    res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true, domain: "localhost" })
    return res.json(userData);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const userData = await this.userService.login(email, password);
    res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
    return res.json(userData);
  }

  async logout(req: Request, res: Response) {
    const { refreshToken } = req.cookies;
    const token = await this.userService.logout(refreshToken);
    res.clearCookie('refreshToken');
    res.json(token);
  }

  async activate(req: Request, res: Response) {
    const activationLink = req.params.link;
    await this.userService.activate(activationLink);
    res.redirect(process.env.CLIENT_URL as string);
  }

  async refresh(req: Request, res: Response) {
    const { refreshToken } = req.cookies;
    const userData = await this.userService.refresh(refreshToken as string);
    return this.setRefreshTokenAndSend(res, userData);
  }

  async changePassword(req: Request, res: Response) {
    const { email, oldPassword, newPassword } = req.body;
    const changedUser = await this.userService.changePassword(email, oldPassword, newPassword);
    return this.setRefreshTokenAndSend(res, changedUser);
  }

  setRefreshTokenAndSend(res: Response, userData: IUserWithToken) {
    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true
    });
    return res.json(userData);
  }
}

const userController = new UserController(UserService);
export default userController;
