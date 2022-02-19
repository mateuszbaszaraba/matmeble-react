import React from 'react';
import Wrapper from '../layout/shared/Wrapper/Wrapper';
import HeroImg from '../layout/HeroImg/HeroImg';
import Header from '../layout/shared/Header/Header';
import HeroSection from '../layout/HeroSection/HeroSection';
import IconSection from '../layout/IconSection/IconSection';
import AboutSection from '../layout/AboutSection/AboutSection';
import Footer from '../layout/shared/Footer/Footer';
import CentralInfo from '../layout/CentralInfo/CentralInfo';

const Home = () => {
  return (
    <>
      <HeroImg />
      <Wrapper>
        <Header />
        <HeroSection />
        <CentralInfo />
        <IconSection />
        <AboutSection />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Home;
