import { observer } from 'mobx-react-lite';
import { MainContainer } from '../common/containers/AppContainer/MainContainer';
import { Button, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { Context } from '../app';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../common/consts/app-keys.const';

const Profile = () => {
  const navigate = useNavigate();
  const { store } = useContext(Context);
  return (
    <MainContainer>
      <Text marginBottom={'50px'} marginTop={'60px'} fontSize={'3xl'}>
        You are authorized by {store.user.email} email
      </Text>
      <Button
        colorScheme="teal"
        size="md"
        marginTop={'50px'}
        onClick={() => navigate(RouteNames.CHANGE_PASSWORD)}
      >
        Change Password
      </Button>
      <Button colorScheme="teal" size="md" marginTop={'50px'} onClick={() => store.logout()}>
        Logot
      </Button>
    </MainContainer>
  );
};

export default observer(Profile);
