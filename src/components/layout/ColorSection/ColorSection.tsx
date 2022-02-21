import React from 'react';
import { ColorSectionStyled } from './ColorSection.styled';
import ContentHeader from '../shared/ContentHeader/ContentHeader';
import ColorSectionContent from './subcomponents/ColorSectionContent/ColorSectionContent';

const ColorSection = (): JSX.Element => {
  return (
    <ColorSectionStyled>
      <ContentHeader
        lightHeader='do wybrania szeroka'
        boldHeader='kolorystyka'
      />
      <ColorSectionContent />
    </ColorSectionStyled>
  );
};

export default ColorSection;
