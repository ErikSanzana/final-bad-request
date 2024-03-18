import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ADMINENDPOINT } from "../context/config/constant";
import axios from "axios";

const PostProduct = () => {
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

    axios
    .post(ADMINENDPOINT.CProduct, data)
    .then(() => {
      window.alert("Usuario registrado con éxito 😀.");
      navigate("/login");
    })
    .catch(({ response: { data } }) => {
      console.error(data);
      window.alert(`${data.message} 🙁.`);
    });
  };

  return (
    <Form noValidate onSubmit={handleSubmit(send)}>
      <Form.Group className="mb-3" controlId="PostProduct">
        <Form.Label>nombre producto </Form.Label>
        <Form.Control
          type="text"
          placeholder="Producto"
          {...register("name")}
        />

        <Form.Label>descripcion</Form.Label>
        <Form.Control
          type="text"
          placeholder="desripcion"
          {...register("description")}
        />

        <Form.Label>precio</Form.Label>
        <Form.Control
          type="number"
          placeholder="$$$$$$"
          {...register("price")}
        />

        <Form.Label>stock</Form.Label>
        <Form.Control
          type="number"
          placeholder="Stock"
          {...register("stock")}
        />

        <Form.Label>URL image </Form.Label>
        <Form.Control
          type="text"
          placeholder="URL"
          {...register("product_image")}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Postear Producto
      </Button>
    </Form>
  );
};

export default PostProduct;
