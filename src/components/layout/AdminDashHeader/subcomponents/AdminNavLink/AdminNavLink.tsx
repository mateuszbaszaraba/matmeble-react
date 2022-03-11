import React from 'react';
import { AdminNavLinkStyled, LinkText } from './AdminNavLink.styled';

const AdminNavLink = ({
  icon,
  text,
  onClick,
}: {
  icon: any;
  text: string;
  onClick: any;
}): JSX.Element => {
  return (
    <AdminNavLinkStyled onClick={onClick}>
      {icon()}
      <LinkText>{text}</LinkText>
    </AdminNavLinkStyled>
  );
};

export default AdminNavLink;
