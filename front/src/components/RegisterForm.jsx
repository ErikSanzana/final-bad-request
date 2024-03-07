import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';

const RegisterForm = () => {
  const exampleRegion = [
    { nombre: "tarapacá", id: "I" },
    { nombre: "antofagasta", id: "II" },
    { nombre: "atacama", id: "III" },
    { nombre: "coquimbo", id: "IV" },
    { nombre: "valparaíso", id: "V" },
    { nombre: "o’higgins", id: "VI" },
    { nombre: "maule", id: "VII" },
    { nombre: "biobío", id: "VIII" },
    { nombre: "araucanía", id: "IX" },
    { nombre: "los lagos", id: "X" },
    { nombre: "aysén", id: "XI" },
    { nombre: "magallanes", id: "XII" },
    { nombre: "metropolitana", id: "RM" },
    { nombre: "los ríos", id: "XIV" },
    { nombre: "arica y parinacota", id: "XV" }
  ];

  const exampleComuna = [
    "natural",
    "oil",
    "hypoallergenic",
    "vanilla",
    "floral",
    "chocolate",
    "sulfur",
    "skin care"
  ];

  const { register, handleSubmit, formState: { errors }  } = useForm();
  const send = (data) => {
    Object.keys(data).forEach((key) => {
      if (typeof data[key] === 'string') {
        data[key] = data[key].trim();
      }
    });
  
    console.log(data);
    //add post method
  };

  return (
  
    <div className="p-1">
      <Container fluid>
      
        <Col>
      <Form noValidate onSubmit={handleSubmit(send)} >
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
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group as={Col} md="4" controlId="formLastName1">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Apellido 1"
              size="sm"
              {...register("lastName1")}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="formLastName2">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Apellido 2"
              size="sm"
              {...register("lastName2")}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
          <Form.Group as={Col} md="3" controlId="postalCode">
            <Form.Label>Codigo Postal</Form.Label>
            <Form.Control
              type="text"
              placeholder="Codigo Postal"
              size="sm"
              required
              {...register("postalCode")}
            />
            <Form.Control.Feedback type="invalid">
              Porfavor ingrese un codigo postal.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="address">
            <Form.Label>Direccion </Form.Label>
            <Form.Control
              type="text"
              placeholder="Dirección"
              size="sm"
              required
              {...register("address")}
            />
            <Form.Control.Feedback type="invalid">
              Ingrese su direccion.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="addressNumber">
            <Form.Label> # Numero </Form.Label>
            <Form.Control
              type="text"
              placeholder="#"
              size="sm"
              required
              {...register("addressNumber")}
            />
            <Form.Control.Feedback type="invalid">
              Ingrese numeracion.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3 p-3 d-inline-flex justify-content-center align-content-center">
          <Form.Group as={Col} md="3" controlId="phoneNumber">
            <Form.Label> Telefono</Form.Label>
            <Form.Control
              type="text"
              placeholder="Telefono"
              defaultValue="+56 "
              size="sm"
              required
              {...register("phoneNumber")}
            />
            <Form.Control.Feedback type="invalid">
              Ingrese telefono.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="regionOfResidence">
            <Form.Label>Region</Form.Label>
            <br></br>
            <Form.Select defaultValue="..." {...register("Region")}>
              {exampleRegion.map((value, key) => (
                <option value={value.nombre} key={key}>
                  {" "}
                  {value.id}. {value.nombre}{" "}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="comunOfResidence">
            <Form.Label>Comuna</Form.Label>
            <br></br>

            <Form.Select defaultValue="..." {...register("Comun")}>
              {exampleComuna.map((value, key) => (
                <option value={value} key={key}>
                  {" "}
                  {value}{" "}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>
<div></div>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          type="password" 
          placeholder="Password" 
          id="inputPassword5"
          size="sm"
          //aria-describedby="passwordHelpBlock"
          
        />
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text>

        <Form.Group className="mb-3" controlId="agreeToTerms" id="checkBox">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            {...register("agreeToTerms", { required: true })}
             isInvalid={!!errors.agreeToTerms}
            />
        </Form.Group>
        <br></br>
        {/* {checkBox.checked} */}

        {/* <Button type="btn btn-success" disabled>
          ¡Registrame!
        </Button> */}

        <Button variant="success">¡Registrame!</Button>
      </Form>
      </Col>
      </Container>
    </div>
  );
};

export default RegisterForm;
