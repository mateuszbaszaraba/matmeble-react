import React from 'react';
import { ContactInfoSectionStyled } from './ContactInfoSection.styled';
import ContentHeader from '../shared/ContentHeader/ContentHeader';
import InfoContent from './subcomponents/InfoContent/InfoContent';

const ContactInfoSection = (): JSX.Element => {
  return (
    <ContactInfoSectionStyled>
      <ContentHeader lightHeader='DANE' boldHeader='KONTAKTOWE' />
      <InfoContent />
    </ContactInfoSectionStyled>
  );
};

export default ContactInfoSection;
