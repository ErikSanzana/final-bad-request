import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";

const PostProducts = () => {
  const postTags = () => {
    // usar para postear los tags en la db
  };

  // necesitamos;
  // const forProduct = {
  //   name: nombre,
  //   description: descripcion,
  //   price: precio,
  //   stock: stock,
  //   image_url: URL,
  // };
  //https://www.youtube.com/watch?v=B5_xEqih_GA for upload images
  return (
      <>
      <Container>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text>Nombre de Producto</InputGroup.Text>
              <Form.Control aria-label="name of Product" />
            </InputGroup>
          </Col>
            <Col>
          
          </Col>
        </Row>

        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text> Descricion</InputGroup.Text>
              <Form.Control aria-label="Description" />
            </InputGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text> Precio $ </InputGroup.Text>
              <Form.Control aria-label="Price of product" />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text>Stock</InputGroup.Text>
              <Form.Control aria-label="Available stock" />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text>url or images here</InputGroup.Text>
              <Form.Control aria-label="Image Url or Image" />
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};
