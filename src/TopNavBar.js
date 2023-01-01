import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function TopNavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Stores</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/DisplayStores">Display Stores</Nav.Link>
            <Nav.Link as={Link} to="/AddStore">Add Store</Nav.Link>
            <Nav.Link as={Link} to="/AddItem">Add Items</Nav.Link>
            <Nav.Link as={Link} to="/Table">Table</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default TopNavBar;