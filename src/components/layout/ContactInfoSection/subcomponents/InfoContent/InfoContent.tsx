import React from 'react';
import { InfoContentStyled } from './InfoContent.styled';

const InfoContent = (): JSX.Element => {
  return (
    <InfoContentStyled>
      <p>marcin baszaraba</p>
      <p>wierzchowisko, 42-333 mykanów</p>
      <p>ul. parkowa 11</p>
      <p>604-381-612</p>
      <p>matmeble@onet.eu</p>
    </InfoContentStyled>
  );
};

export default InfoContent;
