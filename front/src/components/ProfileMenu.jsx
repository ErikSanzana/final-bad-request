import Button from "react-bootstrap/esm/Button";
import { NavLink } from "./helpers/NavLink";

export const ProfileMenu = () => {
  return (
    <>


      <div>
        <Button> Editar Datos</Button>
        <Button> Tienda </Button>
        <Button> Favorites </Button>
        <Button> pedidos </Button>
      </div>
    </>
  );
};
