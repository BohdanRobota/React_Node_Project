import { User } from '../../entities/User.entity';

export default class UserDto {
  public email: string;

  public id: string;

  public password?: string;

  public activationLink?: string;

  public isActivate: boolean;

  constructor(model: User) {
    this.activationLink = model?.activationLink;
    this.password = model?.password;
    this.email = model.email;
    this.id = model.id;
    this.isActivate = model.isActivated;
  }
}
