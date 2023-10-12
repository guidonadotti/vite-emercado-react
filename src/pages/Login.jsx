import JAPlogo from "/img/login.png";
import useWindowTitle from "../hooks/useWindowTitle";
import LoginForm from "../components/LoginForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = () => {
  useWindowTitle({ windowTitle: "Login" });
  return (
    <Container as="main" className="mt-2 text-center">
      <Row className="justify-content-center">
        <Col md="4">
          <img src={JAPlogo} alt="Banner Jóvenes a Programar" srcSet="" />
        </Col>
      </Row>
      <LoginForm />
    </Container>
  );
};

export default Login;
