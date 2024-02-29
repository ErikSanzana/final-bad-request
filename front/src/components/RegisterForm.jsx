import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function RegisterForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className="w-50 p-3 d-inline-flex justify-content-center align-content-center">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className=""
          >
            <Form.Label>Nombre</Form.Label>
            <Form.Control required type="text" placeholder="Nombre" size="sm" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Apellido 1"
              size="sm"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Apellido 2"
              size="sm"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} htmlFor="start">
            <Form.Label>Fecha de nacimiento:</Form.Label>
            <br></br>
            <input
              type="date"
              id="start"
              name="trip-start"
              min="01-01-1900"
              max= "31-12-2024"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3"></Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Codigo Postal</Form.Label>
            <Form.Control
              type="text"
              placeholder="Codigo Postal"
              size="sm"
              required
            />
            <Form.Control.Feedback type="invalid">
              Porfavor ingrese un codigo postal.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom06">
            <Form.Label>Direccion </Form.Label>
            <Form.Control
              type="text"
              placeholder="Dirección"
              size="sm"
              required
            />
            <Form.Control.Feedback type="invalid">
              Ingrese su direccion.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label> # Numero </Form.Label>
            <Form.Control type="text" placeholder="#" size="sm" required />
            <Form.Control.Feedback type="invalid">
              Ingrese numeracion.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3 p-3 d-inline-flex justify-content-center align-content-center">
          <Form.Group as={Col} md="3" controlId="validationCustom07">
            <Form.Label> Telefono</Form.Label>
            <Form.Control
              type="text"
              placeholder="Telefono"
              defaultValue="+56 "
              size="sm"
              required
            />
            <Form.Control.Feedback type="invalid">
              Ingrese telefono.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Region</Form.Label>
            <br></br>
            <Form.Select defaultValue="Choose...">
              {/* sacar desde json o api? */}
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Comuna</Form.Label>
            <br></br>

            <Form.Select defaultValue="Choose...">
              {/* sacar desde json o api? */}

              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        <br></br>
        <Button type="submit">¡Registrame!</Button>
      </Form>
    </div>
  );
}

export default RegisterForm;
