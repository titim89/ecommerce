import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { NavLink, Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar className="w-100 navBar" collapseOnSelect expand="lg" bg="light">
            <Container>
            <Navbar.Brand as={Link} to="/">BAKERY</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto">
                <Nav.Link as={NavLink} to="/category/tortas" className='navLink mx-5'>Tortas</Nav.Link>
                <Nav.Link as={NavLink} to="/category/cuadraditos" className='navLink mx-5'>Cuadraditos</Nav.Link>
                <Nav.Link as={NavLink} to="/category/cookies" className='navLink mx-5'>Cookies</Nav.Link>
                <Nav.Link as={NavLink} to="/form" className='navLink mx-5'>Formulario</Nav.Link>
                </Nav>
                <Nav>
                    <CartWidget />
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;

