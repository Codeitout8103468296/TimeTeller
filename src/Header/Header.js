import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LOGO from '../logo-removebg-preview.png'
function NavScrollExample() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand href="/"><img src={LOGO} alt="TT" style={{height:"40px"}}/>TimeTeller</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

<Nav.Link href="/">General</Nav.Link>
  <Nav.Link href="/entertainment">Entertainment</Nav.Link>
  <Nav.Link href="/sports">Sports</Nav.Link>
  <Nav.Link href="/business">Business</Nav.Link>
  <Nav.Link href="/health">Healt</Nav.Link>
  <Nav.Link href="/science">Science</Nav.Link>
  <Nav.Link href="/technology">Technology</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;







