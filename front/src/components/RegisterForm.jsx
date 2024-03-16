import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const RegisterForm = ({ userView, registerView, adminView }) => {
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
  };
  // pasar por prop a la vista que corresponda para mandar por axios los cambios

  return (
    <>
      <Container fluid="xl">
        <div className="p-1">
          <Form noValidate onSubmit={handleSubmit(send)}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nombre"
                  size="sm"
                  {...register("name")}
                  autocomplete="section-red shipping email"
                />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="last_name">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Apellido"
                  size="sm"
                  {...register("last_name")}
                  autocomplete="section-red shipping email"
                />
              </Form.Group>
              {userView ? null : (
                <Form as={Col} md="3" controlId="email">
                  <Form.Label>email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="correo@correo.cl"
                    size="sm"
                    required
                    {...register("email")}
                    autocomplete="section-red shipping email"
                  />
                </Form>
              )}
              {registerView || userView ? null : (
                <Form.Group as={Col} md="4" controlId="address">
                  <Form.Label>RUT </Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Rut, sin puntos ni - (guion)"
                    size="sm"
                    {...register("postal_code")}
                    autocomplete="section-red shipping rut"
                  />
                </Form.Group>
              ) }
              <Form.Group as={Col} md="4" controlId="postalCode">
                <Form.Label>Codigo postal </Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="(direccion primaria)"
                  size="sm"
                  {...register("postal_code")}
                  autocomplete="section-red shipping codigo postal"
                />
              </Form.Group>

              <Form.Group as={Col} htmlFor="start" controlId="dateOfBirth">
                {/* <Form.Label>Fecha de nacimiento:</Form.Label>
                <br></br>
                <input
                  type="date"
                  id="start"
                  name="user-register"
                  min="01-01-1900"
                  max="31-12-2024"
                  {...register("birthDate")}
                /> */}
                <Form.Label>Fecha de nacimiento:</Form.Label>
                <br></br>
                <input
                  type="datetime-local" // Cambiado a datetime-local para incluir la hora
                  name="birthDate" // Cambiado el nombre del campo
                  min="1900-01-01T00:00" // Formato adecuado para datetime-local
                  max="2024-12-31T23:59" // Formato adecuado para datetime-local
                  {...register("birthDate")}
                />{" "}
                <br></br>
                <span> para efectos de carta astral (no obligatorio) </span>
              </Form.Group>
            </Row>

            <Row className="justify-content-md-center">
              <Form.Group as={Col} xs lg="2">
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                  type="password"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Ingrese su contraseña"
                />
                <Form.Text id="passwordHelpBlock" muted>
                  Tu contraseña debe tener entre 6 a 255 caracteres, numeros y
                  letras, sin espacios, caracteres especiales, utf-8 y no
                  contener emojis.
                </Form.Text>

                <Form.Label htmlFor="inputPassword6">Password</Form.Label>
                <Form.Control
                  type="password"
                  id="inputPassword6"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Repite la contraseña "
                />
              </Form.Group>
            </Row>

            <Button variant="success" type="btn btn-success">
              ¡Registrame!
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default RegisterForm;
