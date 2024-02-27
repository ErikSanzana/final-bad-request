import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../img/jabon1.jpg';
import img2 from '../img/jabon2.jpg';
import img3 from '../img/jabon3.jpg';
import img4 from '../img/jabon4.jpg';
import img5 from '../img/jabon5.jpg';
import img6 from '../img/jabon6.jpg';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Cambia la velocidad del carrusel aquí
    pauseOnHover: true
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={img1} alt="Imagen 1" />
        </div>
        <div>
          <img src={img2} alt="Imagen 2" />
        </div>
        <div>
          <img src={img3} alt="Imagen 3" />
        </div>
        <div>
          <img src={img4} alt="Imagen 4" />
        </div>
        <div>
          <img src={img5} alt="Imagen 5" />
        </div>
        <div>
          <img src={img6} alt="Imagen 6" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
