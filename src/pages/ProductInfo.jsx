import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaComments as ComentariosIcon } from "react-icons/fa";

import AgregarCarrito from "../components/ProductInfo/AgregarCarrito";
import ImagenesIlustrativas from "../components/ProductInfo/ImagenesIlustrativas";
import IngresarComentario from "../components/ProductInfo/IngresarComentario";
import { EstrellasProvider } from "../contexts/EstrellasContext";
import Comentario from "../components/Products/Comentario";
import CardPersonalizada from "../components/General/Cards";
import { ProductContext } from "../contexts/ProductContext";
import Spinner from "../components/Spinner";
import useWindowTitle from "../hooks/useWindowTitle";
import { lazy } from "react";
const Error = lazy(() => import("./Error"));

function Comentarios({ datos }) {
  if (datos.length == 0)
    return <h2 className="my-3">¡Sé el primero en comentar!</h2>;
  return (
    <Row as="section" className="mt-4 justify-content-between g-4">
      <Col md="8">
        {datos.map((comentario, index) => {
          return (
            <Comentario
              className="mt-2 border-bottom"
              key={`${comentario.product}_${index}`}
              {...comentario}
            />
          );
        })}
      </Col>
    </Row>
  );
}

function ProductInfo() {
  const {
    producto,
    isLoadingProducto,
    errorProducto,
    comentarios,
    comentariosUsuario,
  } = useContext(ProductContext);
  const {
    name,
    currency,
    cost,
    soldCount,
    description,
    relatedProducts = [],
  } = producto;
  useWindowTitle({ windowTitle: name });
  if (isLoadingProducto) return <Spinner />;

  if (errorProducto)
    return (
      <Error>
        <h2>Producto no encontrado</h2>
      </Error>
    );
  return (
    <Container as="main" className="p-3">
      <h1>
        <b>{name}</b>
      </h1>
      <hr />
      <Row className="gy-3 mb-2">
        <Col lg="4" as="section">
          <ImagenesIlustrativas />
        </Col>
        <Col as="section">
          <h2>
            <b>
              {currency} {cost}
            </b>
          </h2>
          <p>{soldCount} unidades vendidas</p>
          <h2>Descripción</h2>
          <p>{description}</p>
          <AgregarCarrito />
        </Col>
      </Row>
      <Row as="section">
        <h2>
          <ComentariosIcon /> Opiniones
        </h2>
        <EstrellasProvider>
          <IngresarComentario />
        </EstrellasProvider>
      </Row>

      <Comentarios datos={comentarios.concat(comentariosUsuario)} />

      <h2 className="mt-2">Productos relacionados</h2>

      <Row className="g-2">
        {relatedProducts.map(({ name, image, id }) => (
          <Col key={`Producto_${id}`} xs="6" md="3">
            <CardPersonalizada
              to={`/producto/${id}`}
              name={name}
              imgSrc={`/${image}`}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductInfo;
