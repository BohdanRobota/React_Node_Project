import { observer } from 'mobx-react-lite';
import { MainContainer } from '../common/containers/AppContainer/MainContainer';
import ChangePasswordForm from '../auth/components/changePassword/changePassword';
import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { Context } from '../app';

const ChangePassword = () => {
  const { store } = useContext(Context);
  return (
    <MainContainer>
      <ChangePasswordForm />
    </MainContainer>
  );
};

export default observer(ChangePassword);
