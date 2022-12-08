import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {CardGroup} from "react-bootstrap";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import NavBarComponent from "./components/NavBarComponent";

function App() {
    return (
        <>
            <NavBarComponent></NavBarComponent>

            <Cards></Cards>

            <Footer></Footer>
        </>
    );
}

export default App;
