import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SoapContext } from "../context/context";
import IconHeart from "../assets/icon/IconHeart";

// usar solo 1 carta para standarizar y reutilizar componentes.

const CardProduct = ({
  descripcion,
  id,
  stock,
  title,
  url_imagen,
  valor,
  add,
  fav,
  detail,
  amount
}) => {
  const { setProducts } = useContext(SoapContext);

  const navigate = useNavigate();

  const addToCart = (id) => {
    setProducts((cart) => {
      const toBuy = cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            add: true,
            amount: 1
          };
        } else {
          return product;
        }
      });
      return toBuy;
    });

    //swal aca?
  };

  const addToFav = (id) => {
    setProducts((likeThis) => {
      const toFav = likeThis.map((like) => {
        if (like.id === id) {
          return {
            ...like,
            fav: !like.fav
          };
        } else {
          return like;
        }
      });
      return toFav;
    });
    //   swal aca
  };

  const removeFromCart = (id) => {
    setProducts((products) => {
      const remove = products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            add: false,
            amount: 0
          };
        } else {
          return product;
        }
      });
      return remove;
    });
  };

  return (
    <>
      <Card style={{ width: "18rem" }} id={id} key={id}>
        <Card.Img variant="top" src={url_imagen} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {/* si trae texto de descripcion, entonces escribelo */}
          {descripcion && <Card.Text>{descripcion}</Card.Text>}

          {title && (
            <div>
              <IconHeart filled={fav} />

              {/* si hay stock ponlo junto con el precio (formateado a peso chileno) */}
              {stock ? (
                <div>
                  <span> quedan:{stock}</span>
                  <span>
                    {" "}
                    Precio:
                    {Intl.NumberFormat("es-CL", {
                      style: "currency",
                      currency: "CLP"
                    }).format(Number(valor))}
                  </span>
                </div>
              ) : (
                <span> sin stock</span>
              )}

              {/* añade al carro y si ya esta en el carro, entonces avisa y da la opcion de eliminar */}
              {!add ? (
                <Button variant="primary" onClick={() => addToCart(id)}>
                  añade al carro
                </Button>
              ) : (
                <div>
                  {" "}
                  <span> en el carro! </span>
                  <Button variant="primary" onClick={() => removeFromCart(id)}>
                    Eliminar
                  </Button>
                </div>
              )}

              {/* añade a favoritos, marca el corazon de rojo, y si ya es favorito, quitalo  */}

              {fav ? (
                <Button variant="primary" onClick={() => addToFav(id)}>
                  Quitar de favoritos
                </Button>
              ) : (
                <Button variant="primary" onClick={() => addToFav(id)}>
                  Añadir a favoritos
                </Button>
              )}
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default CardProduct;
