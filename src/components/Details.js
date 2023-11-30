import React from 'react';
import NavBarComponent from "./NavBarComponent";
import {useLocation, useNavigate} from "react-router-dom";
import {decodeToken, isExpired} from "react-jwt";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";
import ReactPlayer from 'react-player';


function Details(props) {
    const isNotLogged = isExpired(localStorage.getItem('token'));
    const user = decodeToken(localStorage.getItem('token'));
    const navigate = useNavigate();
    const location = useLocation();
    const film = location.state?.film;
    const textLines = film.text.split('\n');
    const deleteMovie = () => {
        axios.delete('http://localhost:3001/api/posts/' + film.id)
            .then((restore) => {
                navigate("/")
            })
    }

    return (
        <div className="default">
            <NavBarComponent></NavBarComponent>
            <div style={{ width: '100%', height: '97.3%', backgroundColor: '#1C7293', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{ textAlign: 'center' }}>{film.title}</h1>
                <div className="tile-container" style={{ width: '400px', height: '400px', margin: '1rem' }}>
                    <ReactPlayer
                        className="yt"
                        url={film.ytLink}
                        width="100%"
                        height="100%"
                        controls={true}
                    />
                </div>
                <div style={{ textAlign: 'center', margin: '1rem' }}>
                    <img src={film.image} style={{ height: '250px', width: '200px' }} alt={film.title} />
                </div>
                <div style={{ textAlign: 'center', margin: '1rem' }}>
                    {textLines.map((line, index) => (<p key={index}>{line}</p>))}
                </div>
                <div style={{ textAlign: 'center', margin: '1rem', marginBottom: '4rem' }}>
                    {(!isNotLogged && user["isAdmin"]) && <Button style={{ width: "10rem", margin: "1rem 0" }} onClick={() => {
                        deleteMovie()
                    }} className="mb-4">Usuń</Button>}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Details;