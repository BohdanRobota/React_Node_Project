import styled from 'styled-components';

export const TodoContainer = styled.div<{
  isMobile: boolean;
}>`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 3px solid grey;
  border-radius: 10px;
  margin-top: 15px;
  justify-content: space-between;
  align-items: flex-start;
  min-width: 100%;
  max-width: 100%;
  padding: ${({ isMobile }) => (isMobile ? '20px' : '50px')};
  min-height: ${({ isMobile }) => (isMobile ? '200px' : '400px')};
`;

export const TodoTitle = styled.div`
  margin-bottom: 20px;
  word-break: break-all;
`;

export const TodoDescription = styled.div`
  margin-bottom: 30px;
  word-break: break-all;
`;

export const TodoBtnsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TodoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
