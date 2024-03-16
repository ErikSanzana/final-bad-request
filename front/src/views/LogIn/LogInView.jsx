import Button from "react-bootstrap/esm/Button";
import LogIn from "../../components/LogIn";
import { NavLink } from "react-router-dom";
import { LoginButton } from '../../components/LoginB.jsx';
import { LogoutButton } from '../../components/Logout.jsx';
import {User} from '../../components/User.jsx'


export const LogInView = () => {

  return (
    <>
    
     <section className="section1">
      <div>
        <User/>
        <LoginButton/>
        <LogoutButton/>
      <NavLink to="/register" >
       <Button variant="success" type="btn btn-success">  ¡Registrate aqui! </Button> 
        <div> o usa tu red .... aca el inicio con 
          
        </div>
        </NavLink >
        </div>
      <div className="d-inline-flex justify-content-center border border-5 p-2 mt-4 rounded bg-primary-subtle">
          <LogIn />
       </div>
      </section>
    </>
  );

};




export default LogInView;
