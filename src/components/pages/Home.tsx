import React from 'react';
import Wrapper from '../layout/shared/Wrapper/Wrapper';
import HeroSection from '../layout/HeroSection/HeroSection';
import IconSection from '../layout/IconSection/IconSection';
import AboutSection from '../layout/AboutSection/AboutSection';
import Footer from '../layout/shared/Footer/Footer';
import CentralInfo from '../layout/CentralInfo/CentralInfo';
import ColorSection from '../layout/ColorSection/ColorSection';

const Home = () => {
  return (
    <>
      <Wrapper>
        <HeroSection />
        <CentralInfo />
        <IconSection />
        <AboutSection />
        <ColorSection />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;
