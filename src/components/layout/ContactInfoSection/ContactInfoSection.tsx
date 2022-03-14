import React from 'react';
import { ContactInfoSectionStyled } from './ContactInfoSection.styled';
import ContentHeader from '../shared/ContentHeader/ContentHeader';
import InfoContent from './subcomponents/InfoContent/InfoContent';
import FindUsSection from '../FindUsSection/FindUsSection';
import Footer from '../shared/Footer/Footer';

const ContactInfoSection = (): JSX.Element => {
  return (
    <ContactInfoSectionStyled>
      <ContentHeader lightHeader='DANE' boldHeader='KONTAKTOWE' />
      <InfoContent />
      <FindUsSection />
      <Footer />
    </ContactInfoSectionStyled>
  );
};

export default ContactInfoSection;
