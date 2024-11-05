import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return <>
    <div className="gap-3" >
    <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/item'}>Items</Link>
                </Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link href="#home"></Nav.Link>
                    <Nav.Link href="#item"></Nav.Link>
                    <Nav.Link href="#pricing"></Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    </div>

    </>;
}

export default NavBar;