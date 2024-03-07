import Button from "react-bootstrap/esm/Button";
import LogIn from "../../components/LogIn";
import { NavLink } from "react-router-dom";


export const LogInView = () => {





  return (
    <>
<<<<<<< HEAD
      <section>
        <div>
        <NavLink to="/register" >
        <Button >  ¡Registrate aqui! </Button> 
        </NavLink>
        </div>
=======
      <div className="d-inline-flex justify-content-center border border-success border border-8 p-2 mt-4 rounded bg-primary-subtle">
        <LogIn />
      </div>
>>>>>>> fc693d00e7e48dde0aa35cc276d12eef0a03440e

      <div className="d-inline-flex justify-content-center border border-5 p-2 mt-4 rounded bg-primary-subtle">
          <LogIn />
          <div> o usa tu red .... aca el inicio con </div>
        </div>
        

      </section>
    </>
  );

};




export default LogInView;
