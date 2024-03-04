import { useContext } from "react";
import { SoapContext } from "../context/context.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Importa tu archivo de estilos aquí si es necesario
import ProductCard from "./ProductCard"; // Asegúrate de tener la ruta correcta
import CardProduct from "./CardProducts";

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

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="center-image ">
            {/* <ProductCard product={product} /> */}
            <CardProduct id={product.id} url_imagen={product.url_imagen} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
