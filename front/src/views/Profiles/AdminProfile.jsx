import RegisterForm from "./../../components/RegisterForm.jsx";
import Button from "react-bootstrap/esm/Button";
import "./AdminProfile.css";

export const AdminProfile = () => {
  const whereIam = () => {
    return true;
  };

  useEffect(() => {
    whereIam();
  });

  // postear, put  , otras opciones




  return (
    <>
      <section className="mainAdmin">
        <article className="dataView">
          <Button> Editar Datos</Button>
          <RegisterForm adminView={whereIam} />
        </article>

        <article className="dataView">       
          funcion de buscar usuario
       
        </article>

        <article className="dataView">
          
          
          banear usuarios
        
                
        </article>

        <article className="dataView">Post product- reusarformulario ?</article>
      </section>
      <div></div>
    </>
  );
};

export default AdminProfile;
