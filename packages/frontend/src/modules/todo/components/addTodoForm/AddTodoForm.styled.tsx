import styled from 'styled-components';

export const TodoFormContainer = styled.div<{
  isMobile: boolean;
  isDesktop: boolean;
  isTablet: boolean;
}>`
  width: ${({ isMobile }) => (isMobile ? '100%' : '80%')};
  margin: 0 auto;
`;

export const TodoForm = styled.form``;

export const TodoFormTitle = styled.div`
  font-size: 23px;
  font-weight: 600;
  color: teal;
  margin-bottom: 10px;
`;

export const TodoFormInputBox = styled.div`
  height: 50px;
  width: 100%;
  margin-bottom: 25px;
  & input,
  & textarea {
    height: 100%;
    width: 100%;
    border: none;
    border-radius: 5px;
    background: #f0f1f8;
    padding: 0 20px;
  }
`;

export const TodoFormTextArea = styled.textarea`
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 5px;
  background: #f0f1f8;
  padding: 0 20px;
  resize: none;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
`;

export const TodoFormInput = styled.input``;

export const TodoFormMessageBox = styled.div`
  height: 50px;
  width: 100%;
  margin-bottom: 25px;
  min-height: 150px;
`;

export const TodoFormError = styled.div`
  color: #fc8181;
  font-size: 0.75rem;
  text-align: left;
  margin-top: 0.25rem;
`;
export const TodoFormInputError = styled.div``;

export const TodoFormPrivateBox = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  margin-bottom: 25px;
  & p {
    margin-left: 20px;
    font-size: 20px;
    color: grey;
  }
`;
