import { observer } from 'mobx-react-lite';
import { MainContainer } from '../common/containers/AppContainer/MainContainer';
import ChangePasswordForm from '../auth/components/changePassword/changePassword';

const ChangePassword = () => {
  return (
    <MainContainer>
      <ChangePasswordForm />
    </MainContainer>
  );
};

export default observer(ChangePassword);
