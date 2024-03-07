import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

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
    <Form className='formlog'>
      <Form.Group
        className="mb-4"
        controlId="formBasicEmail"
        noValidate
        onSubmit={handleSubmit(send)}
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          autoComplete="section-red address-level2"
          {...register("email")}
        />
        <Form.Text className="text-muted">
          ingresa tu correo, si aun no estas registrado ingresa
          <Link to="../register"> aqui</Link>
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="btn btn-success" type="submit">Submit</Button>
    </Form>
  );
}

export default LogIn;