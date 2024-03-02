import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from './ProductCard'; // Asegúrate de tener la ruta correcta

function Carousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://finalbadrequest-default-rtdb.firebaseio.com/productos.json')
      .then(response => {
        setProducts(response.data); // Aquí seteamos los datos directamente
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

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
        {products.map(product => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
