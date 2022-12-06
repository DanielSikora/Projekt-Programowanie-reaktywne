import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {CardGroup} from "react-bootstrap";

function App() {
    return (
        <>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="#home">BazaFilmów</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll"/>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="nav navbar-nav navbar-left"
                                style={{maxHeight: '100px'}}
                                navbarScroll
                            >
                                <Nav.Link href="#home">Strona główna</Nav.Link>
                            </Nav>
                            <Nav
                                className="mx-auto order-0"
                                style={{maxHeight: '100px'}}
                                navbarScroll
                            >
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Szukaj"
                                        className="mx-auto order-0"
                                        aria-label="Szukaj"
                                    />
                                    <Button variant="outline-success">Szukaj</Button>
                                </Form>
                            </Nav>
                            <Nav
                                className="nav navbar-nav navbar-right"
                                style={{maxHeight: '100px'}}
                                navbarScroll
                            >
                                <Nav.Link href="#login">Logowanie</Nav.Link>
                                <Nav.Link href="#signin">Rejestracja</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <CardGroup>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('./batman.jpg')}/>
                        <Card.Body>
                            <Card.Title>The Batman</Card.Title>
                            <Card.Text>
                                He is The Batman
                            </Card.Text>
                            <Button variant="primary">Strona filmu</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('./batman.jpg')}/>
                        <Card.Body>
                            <Card.Title>The Batman</Card.Title>
                            <Card.Text>
                                He is The Batman
                            </Card.Text>
                            <Button variant="primary">Strona filmu</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('./batman.jpg')}/>
                        <Card.Body>
                            <Card.Title>The Batman</Card.Title>
                            <Card.Text>
                                He is The Batman
                            </Card.Text>
                            <Button variant="primary">Strona filmu</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('./batman.jpg')}/>
                        <Card.Body>
                            <Card.Title>The Batman</Card.Title>
                            <Card.Text>
                                He is The Batman
                            </Card.Text>
                            <Button variant="primary">Strona filmu</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('./batman.jpg')}/>
                        <Card.Body>
                            <Card.Title>The Batman</Card.Title>
                            <Card.Text>
                                He is The Batman
                            </Card.Text>
                            <Button variant="primary">Strona filmu</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('./batman.jpg')}/>
                        <Card.Body>
                            <Card.Title>The Batman</Card.Title>
                            <Card.Text>
                                He is The Batman
                            </Card.Text>
                            <Button variant="primary">Strona filmu</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('./batman.jpg')}/>
                        <Card.Body>
                            <Card.Title>The Batman</Card.Title>
                            <Card.Text>
                                He is The Batman
                            </Card.Text>
                            <Button variant="primary">Strona filmu</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('./batman.jpg')}/>
                        <Card.Body>
                            <Card.Title>The Batman</Card.Title>
                            <Card.Text>
                                He is The Batman
                            </Card.Text>
                            <Button variant="primary">Strona filmu</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('./batman.jpg')}/>
                        <Card.Body>
                            <Card.Title>The Batman</Card.Title>
                            <Card.Text>
                                He is The Batman
                            </Card.Text>
                            <Button variant="primary">Strona filmu</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('./batman.jpg')}/>
                        <Card.Body>
                            <Card.Title>The Batman</Card.Title>
                            <Card.Text>
                                He is The Batman
                            </Card.Text>
                            <Button variant="primary">Strona filmu</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>


            </div>

            <div>
                <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
                    <div className="container text-center">
                        <small>Copyright &copy; Daniel Sikora</small>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default App;
