import React from 'react';
import { FindUsSectionStyled, FindUsBack } from './FindUsSection.styled';
import ContentHeader from '../shared/ContentHeader/ContentHeader';
import FindUsContent from './subcomponents/FindUsContent/FindUsContent';

const FindUsSection = (): JSX.Element => {
  return (
    <FindUsSectionStyled>
      <FindUsBack />
      <ContentHeader lightHeader='GDZIE NAS' boldHeader='ZNAJDZIESZ' />
      <FindUsContent />
    </FindUsSectionStyled>
  );
};

export default FindUsSection;
