import { Text } from '@chakra-ui/react';
import { MainContainer } from '../common/containers/AppContainer/MainContainer';
import { useNavigate } from 'react-router-dom';
import { useMatchMedia } from '../common/hooks/useMatchMedia';

const ActivateAccount = () => {
  const navigate = useNavigate();
  const { isMobile } = useMatchMedia();
  return (
    <MainContainer>
      <Text marginBottom={'80px'} marginTop={'60px'} fontSize={isMobile ? '2xl' : '5xl'}>
        Thank you for registering! We have sent you a link to your email to activate your account.
      </Text>
    </MainContainer>
  );
};

export default ActivateAccount;
