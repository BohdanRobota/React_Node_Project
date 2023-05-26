import { IUser } from "../modules/common/types/user.type";
import { makeAutoObservable } from "mobx";
import AuthService from "../modules/common/services/auth.service";
import axios, { AxiosError } from 'axios';
import { AuthResponse } from "../modules/common/types/auth.type";
import { HttpService } from "../modules/common/services/http.service";
const httpService = new HttpService();


export default class Store {
  user = {} as IUser;
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      this.setAuthSetup(response.data);
    } catch (err) {
      throw err;
    }
  }

  async register(email: string, password: string) {
    try {
      const response = await AuthService.register(email, password);
      this.setAuthSetup(response.data);
    } catch (err) {
      throw err;
    }
  }

  async changePassword(email: string, oldPassword: string, newPassword: string) {
    try {
      const response = await AuthService.changePassword(email, oldPassword, newPassword);
      this.setAuthSetup(response.data);
    } catch (err) {
      throw err;
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (err) {
      throw err;
    }
  }
  async setAuthSetup(data: AuthResponse) {
    localStorage.setItem('token', data.accessToken);
    this.setAuth(true);
    this.setUser(data.user);
  }
  async checkAuth() {
    this.setLoading(true);
    try {
      const response = await axios.get<AuthResponse>('http://localhost:4200/api/user/refresh', { withCredentials: true });
      this.setAuthSetup(response.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(err.response);
      }
    } finally {
      this.setLoading(false);
    }
  }
}