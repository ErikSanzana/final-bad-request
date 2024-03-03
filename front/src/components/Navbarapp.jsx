import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import imgNabar from "../assets/img/logo.webp";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import RegisterView from "../views/Register/RegisterView";

const Navbarapp = () => {
  const setActiveClass = ({ isActive }) =>
    isActive
      ? "text-warning mt-2 pe-2 text-decoration-none"
      : "text-white mt-2 pe-2 text-decoration-none";
  return (
    <>
      <Navbar expand="lg" className="bg-dark ">
        <Container>
          <NavLink to="/">
            <div className="text-white d-flex align-items-center">
              <img src={imgNabar} className="imgNabar" alt="xxx" />
              <p className="titleNavbar ms-2 mb-0"> JABONESVEGAN</p>
            </div>
          </NavLink>

          <Nav>
            <NavLink to="/Cart" className={setActiveClass}>
              <div>{/* Contenido del enlace al carrito */}</div>
            </NavLink>
            <div className="loginNavar">
              <NavLink to="/enter" className={setActiveClass}>
                <div>Login</div>
              </NavLink>

              <NavLink to="/register" className={setActiveClass}>
                <div>/Registro</div>
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
          </Nav>
        </Container>
        <NavLink to="/cart" className={setActiveClass}>
          <div className="divCart">
            <h3>🛒Monto:$$$</h3>
          </div>
        </NavLink>
      </Navbar>
    </>
  );
};

export default Navbarapp;
