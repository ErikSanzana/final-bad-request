import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const PostProduct = () =>
{
  return (
    <Form>
      <Form.Group className="mb-3" controlId="PostProduct">
        <Form.Label>nombre producto </Form.Label>
        <Form.Control type="text" placeholder="Enter email" />

        <Form.Label>descripcion</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />


        <Form.Label>precio</Form.Label>
        <Form.Control type="number" placeholder="Enter email" />


        <Form.Label>stock</Form.Label>
        <Form.Control type="number" placeholder="Enter email" />
  

        <Form.Label>URL image </Form.Label>
        <Form.Control type="text" placeholder="Enter email" />

      </Form.Group>
      <Button variant="primary" type="submit">
        Postear Producto
      </Button>
    </Form>
  );
}

export default PostProduct;
