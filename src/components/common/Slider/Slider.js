import React, { useEffect, useState } from 'react';
import './Slider.css';
import Slider from 'react-slick';
import { useFilterContext } from '../../../contexts/FilterContext/FilterContext';

const desktopSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
};

const mobileSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function Carousel({ slides }) {
  const { closeSubmenu } = useFilterContext();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth);
  const [settings, setSettings] = useState({});

  const updateWidth = () => {
    setIsDesktop(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    if (isDesktop > 1100) {
      setSettings(desktopSettings);
    } else {
      setSettings(mobileSettings);
    }
    return () => window.removeEventListener('resize', updateWidth);
  }, [isDesktop]);

  return (
    <section className="slider" onMouseOver={closeSubmenu}>
      <Slider {...settings}>
        {slides.map((slide) => {
          const { id, image, title, btn } = slide;
          return (
            <article key={id} className="slide">
              <div className="slide-title">
                <h2>{title}</h2>
              </div>
              <img src={image} alt={title} />
              <button>{btn}</button>
            </article>
          );
        })}
      </Slider>
    </section>
  );
}

export default Carousel;
