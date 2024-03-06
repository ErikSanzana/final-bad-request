import { useContext } from "react";
import { SoapContext } from "../../context/context";
import CardProduct from "../../components/CardProducts";
import { confirmBuy } from "../../components/helpers/SwalHelper";

const ShoppingCart = () => {
  const { products,totalProducts } = useContext(SoapContext);




  return (
    <section>
      <div>
      {totalProducts ? (
          <div>
            <div >
              <p>Total del pedido</p>
              <span>
                {Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(Number(totalProducts))}
              </span>
            </div>

            <button
              className="rpgui-button golden"
              onClick={() => {
                confirmBuy();
              }}
            >
              <p> Pagar tu pedido </p>{" "}
            </button>
          </div>
        ) : (
          <span className="rpgui-container framed-golden-2 customBillEmpty">
            {" "}
            Carro Vacio
          </span>
        )}

      </div>



      <div className="p-3 d-flex justify-content-center">
        {products
          .filter((product) => product.add == true)
          .map((product) => (
            <CardProduct
              key={product.id}
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
    </section>
  );
};

export default ShoppingCart;
