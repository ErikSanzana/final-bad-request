import Button from "react-bootstrap/esm/Button";
import { NavLink } from "react-router-dom";
import { User } from "../../components/User.jsx";
import LoginForm from "../../components/LoginForm.jsx";

export const LogInView = () => {
  return (
    <>
      <section className="section1">
        <div>
          <User />

          <NavLink to="/register">
            <Button variant="success" type="btn btn-success">
              {" "}
              ¡Registrate aqui!{" "}
            </Button>
          </NavLink>
        </div>

        <div className="d-inline-flex justify-content-center border border-5 p-2 mt-4 rounded bg-primary-subtle">
          <LoginForm />
        </div>
      </section>
    </>
  );
};

export default LogInView;
