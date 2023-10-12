import { useContext, useEffect, lazy } from "react";
import { useMediaQuery } from "react-responsive";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Cabecera from "../components/Products/ProductsMainCabecera";
import BotonesOrdenar from "../components/Products/BotonesOrdenar";
import Filtros from "../components/Products/Filtros";
import FiltrosDropdown from "../components/General/FiltrosDropdown";
import Productos from "../components/Products/Productos";

import { ProductsContext } from "../contexts/ProductsContexts";
import { lg } from "../utils/bootstrapBreakpoints";
import useWindowTitle from "../hooks/useWindowTitle";
const Error = lazy(() => import("./Error"));

function Products() {
  const { productos, error } = useContext(ProductsContext);
  const isLarge = useMediaQuery({ minWidth: lg });
  useWindowTitle({ windowTitle: productos?.catName || "404" });

  useEffect(() => {
    console.log(error?.message);
  }, [error]);

  if (error?.message === "404")
    return (
      <Error>
        <h2>Categoría no encontrada</h2>
      </Error>
    );

  return (
    <>
      <Cabecera categoria={productos?.catName} />
      <Container fluid={isLarge}>
        <BotonesOrdenar />
        {!isLarge && (
          <FiltrosDropdown>
            <Filtros />
          </FiltrosDropdown>
        )}
        <Row>
          {isLarge && (
            <Col as="aside" xs="2">
              <Filtros />
            </Col>
          )}
          <Col as="main">
            <Productos />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
