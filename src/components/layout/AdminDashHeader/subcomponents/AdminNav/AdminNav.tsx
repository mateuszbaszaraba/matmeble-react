import React, { useContext } from 'react';
import { AdminNavStyled } from './AdminNav.styled';
import AdminNavLink from '../AdminNavLink/AdminNavLink';
import { AiOutlineUser, AiOutlineLogout } from 'react-icons/ai';
import AuthContext from '../../../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AdminNav = (): JSX.Element => {
  const { user, logOut } = useContext(AuthContext);
  let navigate = useNavigate();

  return (
    <AdminNavStyled>
      <AdminNavLink
        icon={AiOutlineUser}
        text={user!.user_name}
        onClick={() => navigate('/profile')}
      />
      <AdminNavLink icon={AiOutlineLogout} text='Logout' onClick={logOut} />
    </AdminNavStyled>
  );
};

export default AdminNav;
