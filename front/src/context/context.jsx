import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { ENDPOINT } from "./config/constant.js";
export const SoapContext = createContext();

// eslint-disable-next-line react/prop-types
const SoapProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState();

  const getAxios = () => {
    try {
      axios
        .get(
          ENDPOINT.products 
        )
        .then((response) => {
          console.log(response);
          // OJO!!!! add, detail, amount y Fav son para el carro de compras y para favoritos
          //manejar amount segun stock (añadir logica si stock = 0 no comprar)
          setProducts(
            response.data.products.map((obj) => ({
              ...obj,
              add: false,
              detail: false,
              fav: false,
              amount: 0,
            }))
          );
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    } catch (error) {
      //mejorar el catch error
      console.log(error);
    }
  };
  useEffect(() => {
    getAxios();
  }, []);

  const totalCart = () => {
    const sum = products
      .filter((f) => f.add == true)
      .map((m) => {
        return { total: Number(m.amount * m.price) };
      })
      .reduce((a, total) => a + total.total, 0);
    setTotalProducts(sum);
  };
  useEffect(() => {
    totalCart();
  });

  return (
    <SoapContext.Provider
      value={{
        products,
        setProducts,
        totalProducts,
        setTotalProducts,
      }}
    >
      {children}
    </SoapContext.Provider>
  );
};

export default SoapProvider;
