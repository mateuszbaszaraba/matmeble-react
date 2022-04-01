import React, { useContext } from 'react';
import {
  AdminLoginFormStyled,
  AdminInput,
  AdminForm,
  AdminLabel,
  AdminSubmitButton,
} from './AdminLoginForm.styled';
import AuthContext from '../../../context/AuthContext';
import useInput from '../../../hooks/useInput';

const AdminLoginForm = (): JSX.Element => {
  let { loginUser } = useContext(AuthContext);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes('@'));

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.length > 6);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetEmail();
    resetPassword();
    loginUser(emailValue, passwordValue);
  };

  return (
    <AdminLoginFormStyled>
      <AdminForm onSubmit={submitHandler}>
        <AdminLabel htmlFor='email'>Email</AdminLabel>
        <AdminInput
          type='text'
          id='email'
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p>Invalid email</p>}

        <AdminLabel htmlFor='password'>Password</AdminLabel>
        <AdminInput
          type='password'
          id='password'
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        {passwordHasError && <p>Password must be at least 5 characters long</p>}
        <AdminSubmitButton disabled={!formIsValid}>Log In</AdminSubmitButton>
      </AdminForm>
    </AdminLoginFormStyled>
  );
};

export default AdminLoginForm;
