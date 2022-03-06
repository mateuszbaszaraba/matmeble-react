import React, { useContext } from 'react';
import {
  AdminLoginFormStyled,
  AdminInput,
  AdminForm,
  AdminLabel,
  AdminSubmitButton,
} from './AdminLoginForm.styled';
import AuthContext from '../../../context/AuthContext';

const AdminLoginForm = (): JSX.Element => {
  let { loginUser } = useContext(AuthContext);

  return (
    <AdminLoginFormStyled>
      <AdminForm onSubmit={loginUser}>
        <AdminLabel htmlFor='username'>Email</AdminLabel>
        <AdminInput
          name='email'
          type='text'
          placeholder='Email or Phone'
          id='username'
        />

        <AdminLabel htmlFor='password'>Password</AdminLabel>
        <AdminInput
          name='password'
          type='password'
          placeholder='Password'
          id='password'
        />
        <AdminSubmitButton>Log In</AdminSubmitButton>
      </AdminForm>
    </AdminLoginFormStyled>
  );
};

export default AdminLoginForm;
