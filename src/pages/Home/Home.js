import React from 'react';
import Slider from '../../components/common/Slider/Slider';
import slides from '../../data/sliderData';

function Home() {
  return (
    <>
      <Slider slides={slides} />
      <h1>home</h1>
    </>
  );
}

export default Home;
