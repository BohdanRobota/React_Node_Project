import { IRoute } from '../common/types/router.type';
import Todos from '../pages/Todos';
import Login from '../pages/Login';
import TodoIdPage from '../pages/TodoIdPage';
import { RouteNames } from '../common/consts/app-keys.const';
import Home from '../pages/Home';
import Register from '../pages/Register';
import ActivateAccount from '../pages/ActivateAccount';
import ChangePassword from '../pages/ChangePassword';

export const publicRoutes: IRoute[] = [
  { path: RouteNames.HOME, component: Home },
  { path: RouteNames.REGISTER, component: Register },
  { path: RouteNames.LOGIN, component: Login },
  { path: RouteNames.ACTIVATE, component: ActivateAccount },
  { path: RouteNames.CHANGE_PASSWORD, component: ChangePassword }
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.TODOS, component: Todos },
  { path: RouteNames.TODOS_ID, component: TodoIdPage }
];
