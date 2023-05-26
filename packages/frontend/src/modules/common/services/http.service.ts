import axios, { AxiosStatic } from 'axios'; // It could be any fetching services, such as default fetch, call api, xhr, etc.
import { IConfig } from '../types/config.type';
import { BACKEND_KEYS } from '../consts/app-keys.const';

export class HttpService {
  constructor(
    private baseUrl: string | undefined = BACKEND_KEYS.BASE_URL,
    private fetchingService: AxiosStatic = axios,
    private apiVersion: string = 'api'
  ) { }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private populateTokenToHeaderConfig() {
    return {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      Coocie: localStorage.getItem('refreshToken')
    };
  }

  private extractUrlAndDataFromConfig({ data, url, ...configWithoutDataAndUrl }: IConfig) {
    return configWithoutDataAndUrl;
  }

  get(config: IConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    console.log(this.getFullApiUrl(config.url));
    return this.fetchingService.get(this.getFullApiUrl(config.url), config?.headers);
  }

  patch(config: IConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.patch(this.getFullApiUrl(config.url), config.data, config?.headers);
  }

  post(config: IConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.post(this.getFullApiUrl(config.url), config.data, config?.headers);
  }

  delete(config: IConfig, withAuth = true) {
    if (withAuth) {
      config.headers = {
        withCredentials: true,
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.delete(this.getFullApiUrl(config.url));
  }
}
