import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalCondiciones({ handleClose }) {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title as="h3">Condiciones de publicación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section className="container">
          <article className="row">
            <h5 className="text-warning">Gold (13%)</h5>
            <p className="muted text-justify">
              Tu producto se verá de forma promocionada en portada, además de
              las condiciones de Premium y Estándar.
            </p>
          </article>
          <hr />
          <div className="row">
            <h5 className="text-primary">Premium (7%)</h5>
            <p className="muted text-justify">
              Se mostrará el producto en los primeros lugares de resultados de
              búsqueda, así cómo cuando se ingrese a la categoría que
              pertenezca.
            </p>
          </div>
          <hr />
          <div className="row">
            <h5 className="text-secondary">Estándar (3%)</h5>
            <p className="muted text-justify">
              El producto se listará en la categoría correspondiente, así como
              en los resultados de búsquedas que coincidan con las palabras
              claves en el nombre.
            </p>
          </div>
        </section>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </>
  );
}
