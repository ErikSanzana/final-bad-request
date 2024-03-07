import Header from "../../components/Header";
import Carrucel from "../../components/Carousel";

const Home = () => {
  return (
    <>
      <Header />
      <Carrucel />
      <div className="d-flex  flex-wrap justify-content-center ">
        {/* aqui componete de productos para el main */}
      </div>
    </>
  );
};

export default Home;
