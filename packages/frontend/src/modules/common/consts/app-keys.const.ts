
export const API_URL = `http://localhost:4200/api`;

// Local storage keys
export const STORAGE_KEYS = {
  JWT_TOKEN_STUDENT: 'JWT_TOKEN_STUDENT',
  JWT_TOKEN_INSTRUCTOR: 'JWT_TOKEN_INSTRUCTOR',
  ADDRESS: 'ADDRESS',
  TOKEN: 'TOKEN'
};

// React-query keys
export const QUERY_KEYS = {
  TODOS: 'todos'
};

// Backend Routes
export const BACKEND_KEYS = {
  BASE_URL: 'http://localhost:4200',
  USER: 'user/',
  TODOS: 'todos/',
  LOGIN: 'login/',
  LOGOUT: 'logout/',
  REGISTER: 'register/'
};

export const MEDIA_QUERIES = {
  isMobile: '(min-width: 320px) and (max-width: 767px)',
  isTablet: '(min-width: 768px) and (max-width: 1199px)',
  isDesktop: '(min-width: 1200px)'
};

export const enum RouteNames {
  TODOS = '/todos',
  OPEN_TODO = '/todos/',
  LOGIN = '/login',
  LOGOUT = '/logout',
  REGISTER = '/register',
  TODOS_ID = '/todos/:id',
  HOME = '/',
  ACTIVATE = '/activate',
  CHANGE_PASSWORD = '/change-password',
  PROFILE = '/profile'
}
