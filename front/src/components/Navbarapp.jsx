import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import imgNabar from "../assets/img/logo.webp";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useContext } from "react";
import { SoapContext } from "../context/context";

const Navbarapp = () => {
  const { totalProducts } = useContext(SoapContext);

  const setActiveClass = ({ isActive }) =>
    isActive
      ? "text-warning mt-2 pe-2 text-decoration-none"
      : "text-white mt-2 pe-2 text-decoration-none";
  return (
    <Navbar expand="lg" className="bg-dark d-flex justify-content-around">
      <Nav className="customNav">
        <NavLink to="/">
          <img src={imgNabar} className="navBarImg" alt="Vegan Soap img" />
          <p className="titleNavbar  text-white"> JABONESVEGAN</p>
        </NavLink>
        <div className="linkers">
          <NavLink to="/store" className={setActiveClass}>
            <div>Tienda</div>
          </NavLink>

          <NavLink to="/favoritos" className={setActiveClass}>
            <div>Favoritos</div>
          </NavLink>

          <NavLink to="/login" className={setActiveClass}>
            <div>Login</div>
          </NavLink>

          <NavLink to="/register" className={setActiveClass}>
            <div>Registro</div>
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
          <Button variant="outline-success">Search</Button>
        </div>

        <NavLink to="/cart" className={setActiveClass}>
          <div className="divCart">
            {totalProducts ? (
              <span>
                {" "}
                🛒Monto:
                {Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP"
                }).format(Number(totalProducts))}
              </span>
            ) : (
              <span>Esperamos tu pedido</span>
            )}
          </div>
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default Navbarapp;
