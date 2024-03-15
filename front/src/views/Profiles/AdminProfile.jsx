import { FormData } from "../../components/DataEdit";
import Button from "react-bootstrap/esm/Button";
import "./AdminProfile.css";

export const AdminProfile = () => {
  // postear, ver usuarios , otras opciones
  return (
    <>
      <section className="mainAdmin">
        <article className="dataView">
          <Button> Editar Datos</Button>
          <FormData />
        </article>

        <article className="dataView">funcion de buscar usuario</article>

        <article className="dataView">banear usuarios</article>

        <article className="dataView">otra cosa de ADMn</article>
      </section>
      <div></div>
    </>
  );
};

export default AdminProfile;
