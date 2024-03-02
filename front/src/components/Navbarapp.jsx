import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import imgNabar from "../assets/img/logo.jpg";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import RegisterView from "../views/Register/RegisterView";

const Navbarapp = () => {
  const setActiveClass = ({ isActive }) =>
    isActive
      ? "text-warning mt-2 pe-2 text-decoration-none"
      : "text-white mt-2 pe-2 text-decoration-none";
  return (
    <>
      <Navbar expand="lg" className="bg-dark align-self-center">
        <Container>
          <Navbar.Brand
            href="#home"
            className="text-white d-flex align-items-center"
          >
            <img src={imgNabar} className="imgNabar" alt="xxx" />
            <p className="titleNavbar ms-2 mb-0">JABONESVEGAN</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav>
            
            <NavLink to="/Cart" className={setActiveClass}>
              <div>{/* Contenido del enlace al carrito */}</div>
            </NavLink>
            <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  </Form>
                  <Button variant="outline-success">Search</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarapp;
