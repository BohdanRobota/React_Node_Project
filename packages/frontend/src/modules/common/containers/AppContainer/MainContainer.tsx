import React from 'react';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import { ContainerWrapper } from './MainContainer.styled';

type AppContainerProps = {
  children: React.ReactNode;
};

export const MainContainer = ({ children }: AppContainerProps) => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  return (
    <ContainerWrapper isMobile={isMobile} isDesktop={isDesktop} isTablet={isTablet}>
      {children}
    </ContainerWrapper>
  );
};
