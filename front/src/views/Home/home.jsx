import Navbarapp from "../../components/Navbarapp";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carrucel from "../../components/Carousel";

const Home = () => {
  return (
    <>
      <Navbarapp />
      <Header />
      <Carrucel />
      <div className="d-flex  flex-wrap justify-content-center ">
        {/* aqui componete de productos para el main */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
