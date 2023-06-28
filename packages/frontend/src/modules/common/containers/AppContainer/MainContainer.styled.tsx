import styled from 'styled-components';

export const ContainerWrapper = styled.div<{
  isMobile: boolean;
  isDesktop: boolean;
  isTablet: boolean;
}>`
  width: 90%;
  margin: 0 auto;
  padding: ${({ isMobile }) => (isMobile ? '10px' : '20px')};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;
