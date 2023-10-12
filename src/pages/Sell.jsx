import { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Cabecera from "../components/Sell/Cabecera";
import {
  Cantidad,
  Categoria,
  Costo,
  Costos,
  Descripcion,
  Imagenes,
  Moneda,
  Nombre,
  TipoDePublicacion,
  VerCondiciones,
} from "../components/Sell/Inputs";
import { SellContext } from "../contexts/SellContext";
import Spinner from "../components/Spinner";
import { PUBLISH_PRODUCT_URL } from "../utils/urls";

function Sell() {
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const { resetForm } = useContext(SellContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
    setLoading(true);

    fetch(PUBLISH_PRODUCT_URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.status);
        }
      })
      .then((data) => {
        window.alert(data.msg);
        resetForm(form);
      })
      .catch((e) => {
        console.log(e);
        window.alert(
          `No se pudo publicar su producto.\nInténtelo de nuevo más tarde`
        );
      })
      .finally(() => {
        setLoading(false);
        setValidated(false);
      });
  };

  return (
    <Container as="main">
      {loading && <Spinner />}
      <Cabecera />
      <Row as="section" className="justify-content-md-center">
        <Col md="10" className="order-md-1 gap-2">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h2>Información del producto</h2>
            <section className="d-flex flex-column gap-3">
              <Nombre />
              <Imagenes />
              <Descripcion />
              <Row as="article">
                <Costo />
                <Moneda />
              </Row>
              <Categoria />
              <Cantidad />
            </section>
            <hr />
            <h2>Tipo de publicación</h2>
            <section className="d-flex flex-column gap-3">
              <TipoDePublicacion />
              <VerCondiciones />
            </section>
            <hr />
            <h2>Costos</h2>
            <section className="d-flex flex-column gap-3">
              <Costos />
            </section>
            <hr />
            <Button type="submit">Vender</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Sell;
