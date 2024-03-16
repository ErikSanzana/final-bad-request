import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const BanForm = () => {
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
                <Form.Label>rut</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nombre"
                  size="sm"
                  {...register("rut")}
                  autocomplete="section-red shipping email"
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Select aria-label="Ban ?">
      <option>Let the hammer fall?</option>
      <option value="false">One</option>
      <option value="true">Two</option>
    </Form.Select>
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

export default BanForm;
