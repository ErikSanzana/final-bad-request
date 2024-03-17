import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { SoapContext } from "../context/context.jsx";
import { NavLink } from "./Helpers/NavLink.jsx";
import imgNabar from "../assets/img/logo.webp";
import LogoutButton from "./Logout.jsx";

const Navbarapp = () => {
  const { dataLog, totalProducts } = useContext(SoapContext);
console.log(dataLog)
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

          {!dataLog.id ? (
            null
          ) : (
            <div>
              <NavLink to="/user">
                <div>perfil user </div>
              </NavLink>
              <NavLink to="/user/favorites">
                <div>favorites </div>
              </NavLink>

              <NavLink to="/admn">
                <div>admin </div>
              </NavLink>
            </div>
          )}

          <NavLink to="/login">
            <div>Inciar Sesión </div>
          </NavLink>
        </div>

        {!dataLog.id ? null : (
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
        )}
      </Nav>

      {!dataLog.id ? null : <LogoutButton />}
    </Navbar>
  );
};

export default Navbarapp;
