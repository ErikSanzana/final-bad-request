import axios from "axios";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { SoapContext } from "./../../context/context.jsx";
import { useContext } from "react";
import { ADMINENDPOINT } from "../../context/config/constant.js";
import { useState, useEffect } from "react";
import BanForm from "../../components/BanForm.jsx";

import "./AdminProfile.css";

const AdminProfile = () => {
  const { dataLog, setDataLog } = useContext(SoapContext);

  const [users, setUsers] = useState([]);
  const [rut, setRut] = useState(dataLog.id);
  console.log(rut)

  const token = dataLog.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const getAxios = (data) => {
    console.log(data)
    try {
      axios
        .get(ADMINENDPOINT.users + `/users/${rut}`, config)
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

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const send = (data) => {
    Object.keys(data).forEach((key) => {
      if (typeof data[key] === "string") {
        data[key] = data[key].trim();
      }
    });
    setRut(data.rut);
    console.log(data);
    getAxios(rut);
  };

  return (
    <>
      <section className="mainAdmin">
        <article className="usersRegistered"></article>
        <article className="dataView">
          <Form noValidate onSubmit={handleSubmit(send)}>
            <InputGroup size="sm" className="mb-3">
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                {...register("rut")}
              />
              <Button variant="primary" type="btn">
                Submit
              </Button>
            </InputGroup>
          </Form>
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
