import { IRoute } from '../common/types/router.type';
import Todos from '../pages/Todos';
import Login from '../pages/Login';
import TodoIdPage from '../pages/TodoIdPage';
import { RouteNames } from '../common/consts/app-keys.const';

export const publicRoutes: IRoute[] = [{ path: RouteNames.LOGIN, component: Login }];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.TODOS, component: Todos },
  { path: RouteNames.TODOS_ID, component: TodoIdPage }
];
