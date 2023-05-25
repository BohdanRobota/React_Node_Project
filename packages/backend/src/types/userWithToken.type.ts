import UserDto from '../dto/user/user.dto';

export interface IUserWithToken {
  user: UserDto;
  refreshToken: string;
  accessToken: string;
}
