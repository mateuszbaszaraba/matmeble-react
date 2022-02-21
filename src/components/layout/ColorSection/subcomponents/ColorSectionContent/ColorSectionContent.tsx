import React from 'react';
import {
  ColorSectionContentStyled,
  ColorSectionImg,
  ColorSectionText,
  TextBack,
} from './ColorSectionContent.styled';

const ColorSectionContent = (): JSX.Element => {
  return (
    <ColorSectionContentStyled>
      <ColorSectionText pos='left'>
        Większy wybór znajdziesz na miejscu (sprawdź gdzie nas znaleźć w
        zakładce kontakt)
      </ColorSectionText>
      <ColorSectionImg />
      <ColorSectionText pos='right'>
        W ofercie posiadamy różne materiały w różnych kolorach
      </ColorSectionText>
    </ColorSectionContentStyled>
  );
};

export default ColorSectionContent;
