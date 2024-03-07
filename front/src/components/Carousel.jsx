<<<<<<< HEAD
import { useContext } from "react";
import { SoapContext } from "../context/context.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Importa tu archivo de estilos aquí si es necesario
// import ProductCard from "./ProductCard"; // Asegúrate de tener la ruta correcta
import CardProduct from "./CardProduct.jsx";

function Carousel() {
  // Ahora los productos vienen desde el context
  const { products } = useContext(SoapContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
=======
import Carousel from 'react-bootstrap/Carousel';
>>>>>>> fc693d00e7e48dde0aa35cc276d12eef0a03440e

function Carrucel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={1000}>
        <img src="../../src/assets/img/infantil.jpg"  className= 'carousel-image'/>
        <Carousel.Caption >
          <div>
          <h3 className='text1'>Linea Infantil</h3>
          <p className='textp1'>Tenemos diferentes figuras.</p></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src="../../src/assets/img/tradicional.jpg" className='carousel-image'/>
        <Carousel.Caption>
          <h3 className='text1'>Linea Tradicional</h3>
          <p className='textp1'>Busca el que más te guste.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src="../../src/assets/img/regalo.jpg" className='carousel-image'/>
        <Carousel.Caption>
          <h3 className='text1'>Para Regalar</h3>
          <p className='textp1'>
            En ese momento especial.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
  }
export default Carrucel;
