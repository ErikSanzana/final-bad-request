import { useContext } from "react";
import { SoapContext } from "../../context/context";
import CardProduct from "../../components/CardProducts";

const Favoritos = () => {

  const { products } = useContext(SoapContext);


  return (
    <div className="p-3 d-flex justify-content-center">
      {products
            .filter((product) => (product.fav == true))
            .map((product) => (
        <CardProduct
          descripcion={product.descripcion}
          id={product.id}
          stock={product.stock}
          title={product.title}
          url_imagen={product.url_imagen}
          valor={product.valor}
          add={product.add}
          fav={product.fav}
          detail={product.detail}
          amount={product.amount}
        />
      ))}
    </div>
  );
};


export default Favoritos;