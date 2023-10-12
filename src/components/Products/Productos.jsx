import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import SpinnerCentrado from "../SpinnerCentrado";
import { ProductsContext } from "../../contexts/ProductsContexts";
import "../../css/Categories.css";
import "../../css/CardsPersonalizadas.css";

function Producto({
  name,
  description,
  cost,
  currency,
  soldCount = 0,
  image,
  to = "",
  imgAlt = `Imagen ilustrativa de «${name}»`,
}) {
  return (
    <Link to={to}>
      <Card>
        <Card.Img
          loading="lazy"
          variant="top"
          src={`/${image}`}
          alt={imgAlt}
        ></Card.Img>
        <Card.Body>
          <Card.Title as="h5">{name}</Card.Title>
          <Card.Title as="h5">
            {currency} {cost}
          </Card.Title>
          <Card.Text>
            <small className="text-muted">{description}</small>
            <br />
            <small>
              {soldCount} unidad{soldCount !== 1 && "es"} vendida
              {soldCount !== 1 ? "s" : ""}
            </small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

function Productos() {
  const { productosArray, isLoading, order, filters, opciones } =
    useContext(ProductsContext);

  if (isLoading) return <SpinnerCentrado />;

  if (productosArray.length === 0)
    return (
      <section className="d-flex flex-column align-items-center text-center pt-4">
        <h2>No hay productos</h2>
        <p>
          Actualmente para esta categoría no se encuentran productos en venta
        </p>
      </section>
    );

  return (
    <section className="gy-3 grid-cards-container ">
      {productosArray
        .sort(opciones[order])
        .filter(({ cost, name, description }) => {
          const campoABuscar = (name + " " + description).toLowerCase();
          const { busqueda, min, max } = filters;
          return (
            cost >= min &&
            cost <= max &&
            campoABuscar.includes(busqueda.toLowerCase())
          );
        })
        .map(({ id, name, ...props }) => {
          return (
            <article key={`${name}_${id}`}>
              <Producto to={`/producto/${id}`} name={name} {...props} />
            </article>
          );
        })}
    </section>
  );
}

export default Productos;
