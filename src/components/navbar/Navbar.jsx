import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navb() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="Inicio">Reciclub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="Score">Score</Nav.Link>
            <Nav.Link href="Sobre">Sobre nós</Nav.Link>
            <Nav.Link href="Conta">Criar conta</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}