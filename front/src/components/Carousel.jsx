import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/img/jabon1.jpg';
import img2 from '../assets/img/jabon2.jpg';
import img3 from '../assets/img/jabon3.jpg';
import img4 from '../assets/img/jabon4.jpg';
import img5 from '../assets/img/jabon5.jpg';
import img6 from '../assets/img/jabon6.jpg';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={img1} alt="Imagen 1" className="carousel-image" />
        </div>
        <div>
          <img src={img2} alt="Imagen 2" className="carousel-image" />
        </div>
        <div>
          <img src={img3} alt="Imagen 3" className="carousel-image" />
        </div>
        <div>
          <img src={img4} alt="Imagen 4" className="carousel-image" />
        </div>
        <div>
          <img src={img5} alt="Imagen 5" className="carousel-image" />
        </div>
        <div>
          <img src={img6} alt="Imagen 6" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
