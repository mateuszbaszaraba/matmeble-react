import React from 'react';
import {
  AdminLoginFormStyled,
  AdminInput,
  AdminForm,
  AdminLabel,
  AdminSubmitButton,
} from './AdminLoginForm.styled';

const AdminLoginForm = (): JSX.Element => {
  return (
    <AdminLoginFormStyled>
      <AdminForm>
        <AdminLabel htmlFor='username'>Email</AdminLabel>
        <AdminInput type='text' placeholder='Email or Phone' id='username' />

        <AdminLabel htmlFor='password'>Password</AdminLabel>
        <AdminInput type='password' placeholder='Password' id='password' />
        <AdminSubmitButton>Log In</AdminSubmitButton>
      </AdminForm>
    </AdminLoginFormStyled>
  );
};

export default AdminLoginForm;
