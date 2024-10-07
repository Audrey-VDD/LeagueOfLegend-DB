import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home"></Nav.Link>
                    <Nav.Link href="#features"></Nav.Link>
                    <Nav.Link href="#pricing"></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>;
}

export default NavBar;