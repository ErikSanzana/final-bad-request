import RegisterForm from "./../../components/RegisterForm.jsx"
import Button from "react-bootstrap/esm/Button";
import "./AdminProfile.css";

export const AdminProfile = () => {
  // postear, ver usuarios , otras opciones
  return (
    <>
      <section className="mainAdmin">
        <article className="dataView">
          <Button> Editar Datos</Button>
          <RegisterForm />
        </article>

        <article className="dataView">funcion de buscar usuario</article>

        <article className="dataView">banear usuarios</article>

        <article className="dataView">
          Post product- reusarformulario ?
        </article>
      </section>
      <div></div>
    </>
  );
};

export default AdminProfile;
