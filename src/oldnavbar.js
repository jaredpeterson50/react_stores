import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopNavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Stores</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='/Home'>Home</Nav.Link>
            <Nav.Link href='/DisplayStores'>Display Stores</Nav.Link>
            <Nav.Link href='/AddStore'>Add Store</Nav.Link>
            <Nav.Link href="/AddItem">Add Items</Nav.Link>
            <Nav.Link href="/Table">Table</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default TopNavBar;