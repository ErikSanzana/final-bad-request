import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

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
  };

  // arreglar que lo madne al query ... ver como enviarlo por dentro y no por query... revidar trabajos

  return (
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
  );
};

export default LogIn;
