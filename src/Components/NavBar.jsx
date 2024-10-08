import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand><Link to={'/'}>Home</Link></Navbar.Brand>
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