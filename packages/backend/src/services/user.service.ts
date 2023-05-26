/* eslint-disable no-console */
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import ApiError from '../error/ApiError';
import { User } from '../entities/User.entity';
import MailService from './mail.service';
import UserDto from '../dto/user/user.dto';
import tokenService from './token.service';
import { TokensEnum } from '../enum/tokens.enum';

class UserService {
  async register(email: string, password: string) {
    const candidate = await User.findOneBy({ email });
    if (candidate) {
      throw ApiError.badRequest('User with this email is already exist');
    }
    const hashPassword = await bcrypt.hash(password, Number(process.env.SALT));
    const activationLink = uuid();
    const newUser = User.create({ email, password: hashPassword, activationLink });
    await User.save(newUser);
    await MailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/user/activate/${activationLink}`
    );
    const userWithTokens = this.generateAndSaveTokens(newUser as User);
    return userWithTokens;
  }

  async activate(activationLink: string) {
    const user = await User.findOneBy({ activationLink });
    if (!user) {
      throw ApiError.badRequest('invalid activation link');
    }
    user.isActivated = true;
    await User.save(user);
  }

  async login(email: string, password: string) {
    const user = await this.checkUserByEmail(email);
    await this.comparePasswords(password, user.password);
    const userWithTokens = this.generateAndSaveTokens(user);
    return userWithTokens;
  }

  async logout(refreshToken: string) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      throw ApiError.unavthorizedError();
    }
    const userData = tokenService.validateToken(refreshToken, TokensEnum.REFRESH);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.unavthorizedError();
    }
    const user = await User.findOneBy({ id: userData.id });
    const userWithTokens = this.generateAndSaveTokens(user as User);
    return userWithTokens;
  }

  async getAll() {
    return User.find();
  }

  async changePassword(email: string, oldPassword: string, newPassword: string) {
    const user = await this.checkUserByEmail(email);
    await this.comparePasswords(oldPassword, user.password);
    const hashPassword = await bcrypt.hash(newPassword, Number(process.env.SALT));
    await User.update(user.id, { password: hashPassword });
    user.password = hashPassword;
    const userWithTokens = this.generateAndSaveTokens(user);
    return userWithTokens;
  }

  async generateAndSaveTokens(user: User) {
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async comparePasswords(firstPassword: string, secondPassword: string) {
    const isPassEquals = await bcrypt.compare(firstPassword, secondPassword);
    if (!isPassEquals) {
      throw ApiError.badRequest('Incorrect password');
    }
  }

  async checkUserByEmail(email: string): Promise<User> {
    const user = await User.findOneBy({ email });
    if (!user) {
      throw ApiError.badRequest('User with this email not found');
    }
    return user;
  }
}

export default new UserService(); // eslint-disable-line
