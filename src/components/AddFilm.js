import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from "./NavBarComponent";
import {MDBBtn, MDBContainer, MDBInput, MDBTextArea} from "mdb-react-ui-kit";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Footer from "./Footer";

function AddFilm() {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [text, setText] = useState("")
    const [ytLink, setYtLink] = useState("")
    const [author, setAuthor] = useState("")
    const [relaseDate, setRelaseDate] = useState("")







    const addFilms = () => {
        axios.post('http://localhost:3001/api/posts', {title: title, image: image, text: text, ytLink: ytLink, author: author, relaseDate: relaseDate })
            .then((restore) => {
                navigate("/")
            })
    }

    return (
        <>
            <div className="default">
                <NavBarComponent></NavBarComponent>
                <div className="default2">
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                    <MDBInput wrapperClass='mb-4' label='Tytuł' id='form1' type='text' value={title}
                              onChange={e => setTitle(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4' label='Adres zdjęcia okładki' id='form2' type='textarea' value={image}
                              onChange={e => setImage(e.target.value)}/>
                    <MDBTextArea wrapperClass='mb-4' label='Tekst piosenki' id='form3' type='textarea' rows={20} value={text}
                              onChange={e => setText(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4' label='Link do piosenki na yt' id='form4' type='text' value={ytLink}
                              onChange={e => setYtLink(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4' label='Autor piosenki' id='form5' type='text' value={author}
                              onChange={e => setAuthor(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4' label='Data wydania' id='form6' type='text' value={relaseDate}
                              onChange={e => setRelaseDate(e.target.value)}/>


                    <MDBBtn className="mb-4" onClick={() => {
                        addFilms()
                    }}>Dodaj film</MDBBtn>


                </MDBContainer>
                    </div>
                <Footer></Footer>
            </div>

        </>
    );
}

export default AddFilm;
