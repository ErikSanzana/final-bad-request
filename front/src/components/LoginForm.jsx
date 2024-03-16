import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ENDPOINT } from "../context/config/constant.js";
import ButtonGoogle from "./BttnGoogle.jsx";


const LogIn = () => {
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
    console.log(data);

    axios
      .post(ENDPOINT.login, usuarioYaREgistrado)
      .then(({ data }) => {
        console.log("dato", data);
        window.sessionStorage.setItem("token", data.token);
        window.alert("Usuario identificado con éxito 😀.");
        //setDeveloper({})
        //navigate('/perfil')
      })
      .catch(({ response: { dato } }) => {
        console.error(dato);
        window.alert(`${data.message} 🙁.`);
      });
  };

  return (
    <Container fluid>
      <Form className="formlog" onSubmit={handleSubmit(send)}>
        <Form.Group className="mb-4" controlId="basicEmail" noValidate>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            autoComplete="username"
            {...register("email")}
          />
          <Form.Text className="text-muted">
            ingresa tu correo, si aun no estas registrado ingresa
            <Link to="../register"> aqui</Link>
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-4" controlId="Psswrd">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            autoComplete="current-password"
            {...register("password")}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicCheckbox">
          <Form.Check
            required
            label="iniciaras sesion ?"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            {...register("DOOM", { required: true })}
            isInvalid={!!errors.agreeToTerms}
          />
        </Form.Group>

        <Button variant="success" type="btn btn-success">
          entra al sitio!
        </Button>
      </Form>
      <ButtonGoogle />
    </Container>
  );
};
export default LogIn;
