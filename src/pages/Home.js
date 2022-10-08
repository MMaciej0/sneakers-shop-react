import React from 'react';
import Slider from '../components/Slider';
import slides from '../sliderData';

function Home() {
  return (
    <>
      <Slider slides={slides} />
      <h1>home</h1>
    </>
  );
}

export default Home;
