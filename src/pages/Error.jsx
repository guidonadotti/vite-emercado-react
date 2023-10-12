import { Link } from "react-router-dom";
import "../css/error.css";
import useWindowTitle from "../hooks/useWindowTitle";
import Button from "react-bootstrap/Button";

export default function Error({ children }) {
  useWindowTitle({ windowTitle: "404" });
  return (
    <main className="error-container">
      <section>
        <h1>404 :(</h1>
        {children}
      </section>
      <Button variant="secondary" as={Link} to="/">
        Volver al inicio
      </Button>
    </main>
  );
}
