import React from 'react';
import {MDBBtn, MDBCheckbox, MDBContainer, MDBIcon, MDBInput} from "mdb-react-ui-kit";
import NavBarComponent from "./NavBarComponent";
import {useLocation, useNavigate} from "react-router-dom";
import {decodeToken, isExpired} from "react-jwt";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";


function Details(props) {
    const isNotLogged = isExpired(localStorage.getItem('token'));
    const user = decodeToken(localStorage.getItem('token'));
    const navigate = useNavigate();
    const location = useLocation();
    const film = location.state?.film;
    const deleteMovie = ()=>{
        axios.delete('https://at.usermd.net/api/movie/'+film.id)
            .then((restore)=>{navigate("/")})
    }

    return (

    <div>
        <NavBarComponent></NavBarComponent>
        <h1>{film.title}</h1>
            <img src={film.image} style={{height: '350px', width: '300px'}}/>
            <p>{film.content}</p>
            {(!isNotLogged && user["isAdmin"])&& <Button style={{width: "10rem", margin: "1rem"}} onClick={() => {deleteMovie()}} className="mb-4">Usuń</Button>}
        <Footer></Footer>

    </div>

    );
}

export default Details;
