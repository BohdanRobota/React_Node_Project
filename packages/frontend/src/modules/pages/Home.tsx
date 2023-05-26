import React from 'react';
import { Button, Link, Text } from '@chakra-ui/react';
import { MainContainer } from '../common/containers/AppContainer/MainContainer';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../common/consts/app-keys.const';
import { useMatchMedia } from '../common/hooks/useMatchMedia';

const Home = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(RouteNames.LOGIN);
  };
  const handleRegister = () => {
    navigate(RouteNames.REGISTER);
  };
  const handleChangePassword = () => {
    navigate(RouteNames.CHANGE_PASSWORD);
  };
  const { isMobile } = useMatchMedia();
  return (
    <MainContainer>
      <Text marginBottom={'80px'} marginTop={'60px'} fontSize={isMobile ? '2xl' : '5xl'}>
        Todo Application
      </Text>
      <Button colorScheme="teal" size="lg" marginBottom={'50px'} onClick={handleLogin}>
        Login
      </Button>
      <Button colorScheme="teal" size="lg" onClick={handleRegister}>
        Register
      </Button>
      <Link color="teal" marginTop={'40px'} onClick={handleChangePassword} fontSize={'xl'}>
        Change password
      </Link>
    </MainContainer>
  );
};

export default Home;
