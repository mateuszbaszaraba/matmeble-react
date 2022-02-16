import React from 'react';
import Wrapper from '../layout/shared/Wrapper/Wrapper';
import HeroImg from '../layout/HeroImg/HeroImg';
import Header from '../layout/shared/Header/Header';
import HeroSection from '../layout/HeroSection/HeroSection';
import IconSection from '../layout/IconSection/IconSection';

const Home = () => {
  return (
    <>
      <HeroImg />
      <Wrapper>
        <Header />
        <HeroSection />
        <IconSection />
      </Wrapper>
    </>
  );
};

export default Home;
