import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import "./AdminProfile.css";
// import { ADMINENDPOINT } from "../../context/config/constant.js";
import { useState, useEffect } from "react";
import BanForm from "../../components/BanForm.jsx";

const AdminProfile = () => {
  const [users, setUsers] = useState([]);
  const [rut, setRut] = useState();

  console.log(users);
  // const whereIam = () => {
  //   return true;
  // };

  // useEffect(() => {
  //   whereIam();
  // });

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Impob25fc25vd0BuaWdodHdhdGNoLmNvbSIsImlhdCI6MTcxMDYzNzMzMSwiZXhwIjoxNzEwNjQwOTMxfQ.7iiLKyOt9__Gf3qxwJgPU01S8692Rtz-xmaNfa-ey0I";

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const getAxios = () => {
    try {
      axios
        .get(
          "https://backend-backup-3tm8.onrender.com/api/v1/admin/users/1700000",
          // ADMINENDPOINT.users + `/user/${id}` ,
          // ADMINENDPOINT.users + `/user/1700000 `,
          config
        )
        .then((response) => {
          console.log(response);
          setUsers(response.data.user);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
      console.log("pasas por response.data");
    } catch (error) {
      //mejorar el catch error
      console.log(error);
    }
  };

  useEffect(() => {
    getAxios();
  }, []);

  return (
    <>
      <section className="mainAdmin">
        <article className="usersRegistered"></article>

        <article className="dataView">
          <InputGroup size="sm" className="mb-3">
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
            <Button variant="success" type="btn btn-success">
              buscar usuario
            </Button>
          </InputGroup>

          <div>
            <ul>
              <li>{users.email}</li>
              <li>{users.name}</li>
              <li>{users.last_name}</li>
              <li>{users.rut}</li>

              {users.is_banned ? (
                <li> BANEADO </li>
              ) : (
                <li> aun no cae el banhammer </li>
              )}
            </ul>
          </div>
        </article>

        <article className="dataView">
          <BanForm />
        </article>

        <article className="dataView">Post product- reusarformulario ?</article>
      </section>
      <div></div>
    </>
  );
};

export default AdminProfile;
