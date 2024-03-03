import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SoapContext = createContext();

const SoapProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState();




  const getAxios = () => {
    try {
      axios
        .get(
          "https://finalbadrequest-default-rtdb.firebaseio.com/productos.json"
        )
        .then((response) => {
          // console.table(response.data);
          // OJO!!!! add, detail, amount y Fav son para el carro de compras y para favoritos
          setProducts(
            response.data.map((obj) => ({
              ...obj,
              add: false,
              detail: false,
              fav: false,
              amount: 0
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

    
//   const billingPizzas = () => {
//     const sum = pizzaMenu
//       .filter((f) => f.add == true)
//       .map((m) => {
//         return { total: Number(m.amount * m.price) };
//       })
//       .reduce((a, total) => a + total.total, 0);

//     setTotalBilling(sum);
//   };
//   useEffect(() => {
//     billingPizzas();
//   });
    
    
    
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
