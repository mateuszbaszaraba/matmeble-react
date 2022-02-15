import React from 'react';
import Wrapper from '../layout/shared/Wrapper/Wrapper';
import HeroImg from '../layout/HeroImg/HeroImg';
import Header from '../layout/shared/Header/Header';
import HeroSection from '../layout/HeroSection/HeroSection';

const Home = () => {
  return (
    <>
      <HeroImg />
      <Wrapper>
        <Header />
        <HeroSection />
      </Wrapper>
    </>
  );
};

export default Home;
