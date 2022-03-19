import React from 'react';
import {
  CentralInfoContentStyled,
  CentralContentHeader,
  CentralHeaderSpan,
  CentralContentLine,
  CentralHeaderButton,
} from './CentralInfoContent.styled';
import { useNavigate } from 'react-router-dom';

const CentralInfoContent = (): JSX.Element => {
  let navigate = useNavigate();
  return (
    <CentralInfoContentStyled>
      <CentralContentHeader>
        Wykonujemy meble pod{' '}
        <CentralHeaderSpan>
          wymiar
          <CentralContentLine
            viewBox='0 0 115 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 13C32.1378 2.14896 84.8711 -3.49468 114 6.00003'
              stroke='#E4C68B'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </CentralContentLine>
        </CentralHeaderSpan>
      </CentralContentHeader>
      <CentralHeaderButton onClick={() => navigate('/nasze-produkty')}>
        Zobacz więcej
      </CentralHeaderButton>
    </CentralInfoContentStyled>
  );
};

export default CentralInfoContent;
