import Card from "react-bootstrap/Card";
import "../../css/CardsPersonalizadas.css";
import { Link } from "react-router-dom";

function CardPersonalizada({
  name,
  imgSrc,
  description = "",
  productCount = "",
  to = "",
  imgAlt = `Imagen ilustrativa de ${name}`,
}) {
  return (
    <Link to={to}>
      <Card>
        <Card.Img
          loading="lazy"
          variant="top"
          src={imgSrc}
          alt={imgAlt}
        ></Card.Img>
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">
            <span>{name}</span>
            {productCount !== "" && (
              <small className="text-muted">
                {productCount} artículo{productCount !== 1 ? "s" : ""}
              </small>
            )}
          </Card.Title>
          <Card.Text>
            <small className="text-muted">{description}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CardPersonalizada;
