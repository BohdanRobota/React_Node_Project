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
  TODOS: 'todos/'
};

export const enum RouteNames {
  TODOS = '/todos',
  LOGIN = '/login',
  TODOS_ID = '/todos/:id'
}
