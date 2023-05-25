import jwt, { Secret } from 'jsonwebtoken';
import { Token } from '../entities/Token.entity';
import UserDto from '../dto/user/user.dto';
import { TokensEnum } from '../enum/tokens.enum';

class TokenService {
  generateTokens(payload: object) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET as string, {
      expiresIn: '30m'
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET as string, {
      expiresIn: '30d'
    });
    return { accessToken, refreshToken };
  }

  async saveToken(userId: string, refreshToken: string) {
    const tokenData = await Token.findOneBy({ userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = Token.create({ userId, refreshToken });
    await Token.save(token);
    return token;
  }

  async removeToken(refreshToken: string) {
    const tokenData = await Token.delete({ refreshToken });
    return tokenData;
  }

  validateToken(token: string, tokenType: string) {
    try {
      const secret =
        tokenType === TokensEnum.ACCESS
          ? process.env.JWT_ACCESS_SECRET
          : process.env.JWT_REFRESH_SECRET;
      const userData = jwt.verify(token, secret as Secret);
      return userData as UserDto;
    } catch (err) {
      return null;
    }
  }

  async findToken(refreshToken: string) {
    const tokenData = await Token.findOneBy({ refreshToken });
    return tokenData;
  }
}

export default new TokenService(); // eslint-disable-line
