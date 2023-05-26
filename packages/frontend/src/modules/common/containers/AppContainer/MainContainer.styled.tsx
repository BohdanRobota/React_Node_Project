import styled from 'styled-components';

export const ContainerWrapper = styled.div<{
  isMobile: boolean;
  isDesktop: boolean;
  isTablet: boolean;
}>`
  width: 100%;
  margin: 0 auto;
  padding: ${({ isMobile }) => (isMobile ? '20px' : '40px')};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
