import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
 import imgNabar from "../assets/img/logo.jpg";


const Navbarapp = () => {
    // const { TotalPrice } = useContext(DataContext);
  
    const setActiveClass = ({ isActive }) =>
      isActive
        ? "text-warning mt-2 pe-2 text-decoration-none"
        : "text-white mt-2 pe-2 text-decoration-none";
    return (
      <>
        <Navbar expand="lg" className="bg-dark align-self-center  ">
          <Container className="f-flex">
            <Navbar.Brand href="#home" className="text-white d-flex ">
              <img src={imgNabar} className="imgNabar" alt="xxx"></img>
              <Nav>
                <NavLink to="/" className={setActiveClass}>
                  <p className="titleNavbar">Nombre de los jabones</p>
                </NavLink>
              </Nav>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav>
              <NavLink to="/Cart" className={setActiveClass}>
                <div className="">
                 
                  <div>
                    {/* <h5>Monto: ${TotalPrice().toLocaleString("es-CL")}</h5> */}
                  </div>
                </div>
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  };
  
  export default Navbarapp;