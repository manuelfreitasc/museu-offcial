import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Exhibitions from '../components/Exhibitions';
import VisitInfo from '../components/VisitInfo';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Exhibitions />
      <VisitInfo />
    </>
  );
};

export default Home;