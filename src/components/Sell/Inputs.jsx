import { useState, lazy, Suspense, useContext } from "react";
import { useId } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import { Input } from "../Input";
import SpinnerCentrado from "../SpinnerCentrado";
import { SellContext } from "../../contexts/SellContext";

const ModalCondiciones = lazy(() => import("./ModalCondiciones"));

export function Nombre() {
  return (
    <Row as="article">
      <Input as={Col} md="6" name="productName">
        <Form.Label>Nombre</Form.Label>
        <Input.Control required type="text" maxLength="20" />
        <Form.Control.Feedback type="invalid">
          Ingrese un nombre para el producto
        </Form.Control.Feedback>
      </Input>
    </Row>
  );
}

export function Imagenes() {
  return (
    <Row as="article">
      <Input as={Col} md="8" name="imagesProduct">
        <Form.Label>Imágenes</Form.Label>
        <Input.Control accept="image/*" type="file" required multiple />
        <Form.Control.Feedback type="invalid">
          Debe ingresar al menos una imagen
        </Form.Control.Feedback>
      </Input>
    </Row>
  );
}
export function Descripcion() {
  const handleInputChange = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  return (
    <Row as="article">
      <Input name="descripcion" as={Col} md="7">
        <Form.Label>Descripción</Form.Label>
        <Input.Control
          as="textarea"
          required
          rows="3"
          style={{ resize: "none", overflow: "hidden" }}
          onChange={handleInputChange}
        />
        <Form.Control.Feedback type="invalid">
          Ingrese una descripción para el producto
        </Form.Control.Feedback>
      </Input>
    </Row>
  );
}

export function Costo() {
  const { costoInput } = useContext(SellContext);
  return (
    <Input as={Col} md="2" name="costo">
      <Form.Label>Costo</Form.Label>
      <Input.Control
        className="number"
        type="number"
        min="1"
        step="100"
        required
        {...costoInput}
      />
    </Input>
  );
}
export function Moneda() {
  const { monedaInput } = useContext(SellContext);
  return (
    <Input as={Col} md="2" name="moneda">
      <Form.Label>Moneda</Form.Label>
      <Form.Select required name="moneda" {...monedaInput}>
        <option value="UYU">UYU</option>
        <option value="USD">USD</option>
      </Form.Select>
    </Input>
  );
}
export function Categoria() {
  const { categoriasAPI } = useContext(SellContext);
  const [categorias, isLoading] = categoriasAPI;
  return (
    <Row as="article">
      <Input name="categoria" as={Col} md="4">
        <Form.Label>Categoría</Form.Label>
        <Form.Select required name="categoria">
          {isLoading && <SpinnerCentrado />}
          {categorias.map(({ id, name }) => {
            return (
              <option key={id} value={name}>
                {name}
              </option>
            );
          })}
        </Form.Select>
      </Input>
    </Row>
  );
}
export function Cantidad() {
  return (
    <Row as="article">
      <Input name="cantidad" as={Col} md="3">
        <Form.Label>Cantidad en Stock</Form.Label>
        <Input.Control type="number" min="1" defaultValue="1" />
      </Input>
    </Row>
  );
}

export function TipoDePublicacion() {
  const { tipoDePublicacionInput } = useContext(SellContext);
  const { publicacionChecked, setPublicacionChecked } = tipoDePublicacionInput;
  return (
    <article>
      <Form.Check
        type="radio"
        name="tipoDePublicacion"
        id={useId()}
        value={13}
        label="Gold (13%)"
        checked={publicacionChecked == 13}
        onChange={(e) => setPublicacionChecked(parseInt(e.target.value))}
        required
      />
      <Form.Check
        type="radio"
        name="tipoDePublicacion"
        id={useId()}
        value={7}
        label="Premium (7%)"
        checked={publicacionChecked == 7}
        onChange={(e) => setPublicacionChecked(parseInt(e.target.value))}
        required
      />
      <Form.Check
        type="radio"
        name="tipoDePublicacion"
        id={useId()}
        value={3}
        label="Estándar (3%)"
        checked={publicacionChecked == 3}
        onChange={(e) => setPublicacionChecked(parseInt(e.target.value))}
        required
      />
    </article>
  );
}

export function VerCondiciones() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        Ver condiciones
      </Button>
      <Modal show={show} onHide={handleClose}>
        <div style={{ minHeight: "60vh" }}>
          <Suspense fallback={<SpinnerCentrado />}>
            <ModalCondiciones handleClose={handleClose} />
          </Suspense>
        </div>
      </Modal>
    </>
  );
}

export function Costos() {
  const { costoInput, monedaInput, tipoDePublicacionInput, formateadores } =
    useContext(SellContext);
  const { formatearComoMoneda, formatearComoPorcentaje } = formateadores;

  return (
    <ListGroup>
      <ListGroup.Item as="article" className="d-flex justify-content-between">
        <div>
          <h3 className="mb-0">Precio</h3>
          <small className="text-muted">unitario del producto</small>
        </div>
        <div className="align-self-center number">
          {formatearComoMoneda(costoInput.value, monedaInput.value)}
        </div>
      </ListGroup.Item>
      <ListGroup.Item as="article" className="d-flex justify-content-between">
        <div>
          <h3 className="mb-0">Porcentaje</h3>
          <small className="text-muted">Según el tipo de publicación</small>
        </div>
        <div className="align-self-center number">
          {formatearComoPorcentaje(
            tipoDePublicacionInput.publicacionChecked / 100
          )}
        </div>
      </ListGroup.Item>
      <ListGroup.Item as="article" className="d-flex justify-content-between">
        <div>
          <h3 className="mb-0">Total ($)</h3>
        </div>
        <div className="align-self-center number">
          <strong>
            {formatearComoMoneda(
              parseInt(costoInput.value) +
                (costoInput.value * tipoDePublicacionInput.publicacionChecked) /
                  100,
              monedaInput.value
            )}
          </strong>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}
