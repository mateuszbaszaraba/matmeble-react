import React from 'react';
import { FindUsSectionStyled } from './FindUsSection.styled';
import ContentHeader from '../shared/ContentHeader/ContentHeader';
import FindUsContent from './subcomponents/FindUsContent/FindUsContent';

const FindUsSection = (): JSX.Element => {
  return (
    <FindUsSectionStyled>
      <ContentHeader lightHeader='GDZIE NAS' boldHeader='ZNAJDZIESZ' />
      <FindUsContent />
    </FindUsSectionStyled>
  );
};

export default FindUsSection;
