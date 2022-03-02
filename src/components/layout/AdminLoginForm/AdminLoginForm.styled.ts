import styled from 'styled-components';

export const AdminLoginFormStyled = styled.section`
  height: 40vh;
  width: 50%;
  background-color: var(--lightGreyColor);
  border: 1px solid var(--lightGreyColor);
  border-radius: 10px;
  margin: 10em auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdminForm = styled.form`
  width: 80%;
  height: auto;
`;

export const AdminLabel = styled.label`
  color: var(--blackFontColor);
`;

export const AdminInput = styled.input`
  display: block;
  height: 5vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 1vh;
  margin-top: 0.3vh;
  outline: none;

  ::placeholder {
    color: var(--blackFontColor);
  }
`;

export const AdminSubmitButton = styled.button`
  box-sizing: border-box;
  width: 100%;
  margin-top: 4vh;
  background-color: var(--goldColor);
  color: var(--whiteColor);
  padding: 0.8em 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid var(--goldColor);
  cursor: pointer;
`;
