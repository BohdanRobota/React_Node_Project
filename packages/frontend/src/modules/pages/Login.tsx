import LoginForm from '../auth/components/authorization/authorization';
import { observer } from 'mobx-react-lite';

const Login = () => {
  return <LoginForm />;
};

export default observer(Login);
