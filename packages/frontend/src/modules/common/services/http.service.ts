import axios, { AxiosStatic } from 'axios'; // It could be any fetching services, such as default fetch, call api, xhr, etc.
import { IConfig } from '../types/config.type';
import { BACKEND_KEYS } from '../consts/app-keys.const';

export class HttpService {
  constructor(
    private baseUrl: string | undefined = BACKEND_KEYS.BASE_URL,
    private fetchingService: AxiosStatic = axios,
    private apiVersion: string = 'api'
  ) {}

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private populateTokenToHeaderConfig() {
    return {
      Authorization: localStorage.getItem('token')
    };
  }

  get(config: IConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.get(this.getFullApiUrl(config.url));
  }

  patch(config: IConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.patch(this.getFullApiUrl(config.url), config.data);
  }

  post(config: IConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.post(this.getFullApiUrl(config.url), config.data);
  }

  delete(config: IConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.delete(this.getFullApiUrl(config.url));
  }
}
