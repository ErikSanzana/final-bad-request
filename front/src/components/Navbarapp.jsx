import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { SoapContext } from "../context/context";
import { NavLink } from "./Helpers/NavLink.jsx";


import imgNabar from "../assets/img/logo.webp";

const Navbarapp = () => {
  const { totalProducts } = useContext(SoapContext);

  // const setActiveClass = ({ isActive }) =>
  //   isActive
  //     ? "text-warning mt-2 pe-2 text-decoration-none"
  //     : "text-white mt-2 pe-2 text-decoration-none";
  // pasa al componente/helpers NavLink // recordar borrar estos comentarios

  return (
    <Navbar expand="lg" className="bg-success d-flex justify-content-around">
      <Nav className="customNav">
        <NavLink to="/">
          <img src={imgNabar} className="navBarImg" alt="Vegan Soap img" />
          <p className="titleNavbar  text-white"> JABONESVEGAN</p>
        </NavLink>
        <div className="linkers">
          <NavLink to="/store">
            <div>Tienda</div>
          </NavLink>

          <NavLink to="/login">
            <div>Inciar Sesión </div>
          </NavLink>
        </div>
        <div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </div>

        <div>
          <Button variant="outline-light">Search</Button>
        </div>

        {/* <NavLink to="/favoritos" >
            <div>Favoritos</div>
          </NavLink> */}

        {/* añadir un if logedin entonces que envie al carro de compras, de otra forma que solo se vea algun mensaje o nada */}
        <NavLink to="/cart">
          {totalProducts ? (
            <div className="divCart">
              <span>
                {" "}
                🛒Monto:
                {Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP"
                }).format(Number(totalProducts))}
              </span>
            </div>
          ) : (
            <div className="divCart">
              <span>Esperamos tu pedido</span>
            </div>
          )}
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default Navbarapp;
