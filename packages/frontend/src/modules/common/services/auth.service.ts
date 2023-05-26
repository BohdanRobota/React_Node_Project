import $api from './http.interceptor';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../types/auth.type';

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('user/login', { email, password })
  }

  static async register(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('user/register', { email, password })
  }

  static async changePassword(email: string, oldPassword: string, newPassword: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('user/change-password', { email, oldPassword, newPassword })
  }

  static async logout(): Promise<void> {
    return $api.post('user/logout')
  }

}