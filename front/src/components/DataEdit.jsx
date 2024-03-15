import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";


const FormData = () => {
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
    //add post method

    return (
      <>
        <Container fluid="xl">
          <div className="p-1">
            <Form noValidate onSubmit={handleSubmit(send)}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="formName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Nombre"
                    size="sm"
                    {...register("name")}
                  />
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="formLastName1">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Apellido"
                    size="sm"
                    {...register("last_name")}
                  />
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="formLastName2">
                  <Form.Label>Codigo postal (direccion primaria) </Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Codigo Postal"
                    size="sm"
                    {...register("postal_code")}
                  />
                </Form.Group>

                <Form.Group as={Col} htmlFor="start" controlId="dateOfBirth">
                  <Form.Label>Fecha de nacimiento:</Form.Label>
                  <br></br>
                  <input
                    type="date"
                    id="start"
                    name="user-register"
                    min="01-01-1900"
                    max="31-12-2024"
                    {...register("birthDate")}
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3"></Row>

              <Row className="mb-3">
                <Form as={Col} md="3" controlId="postalCode">
                  <Form.Label>email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="correo@correo.vl"
                    size="sm"
                    required
                    {...register("email")}
                  />

                  <br></br>

                  <Button variant="success" type="btn btn-success">
                    ¡Registrame!
                  </Button>
                </Form>
              </Row>
            </Form>
          </div>
        </Container>
      </>
    );
  };
};

export default FormData;
