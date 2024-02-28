import { useState, useEffect } from "react";
import Card from "./Card";
/* import data from "../../firebase.json";  */
{/* revisar de donde se obtienen los datos
voy a agregar una imagen de referencia sólo para recordar que se debe generar un .json*/}

const Gallery = ({products}) => {
    const [products, setProducts] = useState([]);

    const requestProducts = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }
useEffect(() => {
    requestProducts()
        .then((res) => {
            setProducts(res);
        })
}, [])


return (
    <div>
        { products.length > 0 &&
        products.map((product) => {
            return (
                <Card key={product.id} product={product}/>
            )
        })
        
        }
    </div>
)

};

export default Gallery;