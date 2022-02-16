import React from 'react';
import { CloseIconStyled } from './CloseIcon.styled';

const CloseIcon = (): JSX.Element => (
  <CloseIconStyled
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.11598 8L2.55798 12.558L3.44198 13.442L7.99998 8.884L12.558 13.442L13.442 12.558L8.88398 8L13.442 3.442L12.558 2.558L7.99998 7.116L3.44198 2.558L2.55798 3.442L7.11598 8Z'
      fill='black'
    />
  </CloseIconStyled>
);

export default CloseIcon;
