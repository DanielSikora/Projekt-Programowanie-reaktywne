import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {isExpired} from "react-jwt";

function NavBarComponent() {
    const isNotLogged = isExpired(localStorage.getItem('token'));


    return (
        <>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="/">BazaFilmów</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll"/>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="nav navbar-nav navbar-left"
                                style={{maxHeight: '100px'}}
                                navbarScroll
                            >
                                <Nav.Link href="/">Strona główna</Nav.Link>
                                <Nav.Link href="/add">Dodaj film</Nav.Link>
                            </Nav>
                            <Nav
                                className="mx-auto order-0"
                                style={{maxHeight: '100px'}}
                                navbarScroll
                            >

                            </Nav>
                            <Nav
                                className="nav navbar-nav navbar-right"
                                style={{maxHeight: '100px'}}
                                navbarScroll
                            >
                                {isNotLogged &&
                                    <Nav.Link href="/signin">Logowanie</Nav.Link>}
                                {isNotLogged &&
                                    <Nav.Link href="/signup">Rejestracja</Nav.Link>}
                                {!isNotLogged && <Nav.Link onClick={() => {
                                    localStorage.removeItem('token');
                                    window.location.href = "/";
                                }} to="/">Wyloguj się</Nav.Link>}

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default NavBarComponent;
