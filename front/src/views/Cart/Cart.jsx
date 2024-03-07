import { useContext } from "react";
import { SoapContext } from "../../context/context";
<<<<<<< HEAD
import CardProduct from "../../components/CardProduct.jsx";
import { confirmBuy } from "../../components/helpers/Alerts.jsx";
=======
import CardProduct from "../../components/CardProducts";
>>>>>>> fc693d00e7e48dde0aa35cc276d12eef0a03440e

const ShoppingCart = () => {

  const { products } = useContext(SoapContext);


  return (
    <div className="p-3 d-flex justify-content-center">
      {products
            .filter((product) => (product.add == true))
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


export default ShoppingCart;