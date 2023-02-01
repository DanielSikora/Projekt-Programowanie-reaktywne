import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from "./NavBarComponent";
import {MDBBtn, MDBContainer, MDBInput} from "mdb-react-ui-kit";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Footer from "./Footer";

function AddFilm() {
    const navigate = useNavigate()
    const [title,setTitle]= useState("")
    const [description,setDescription]= useState("")
    const [image,setImage]= useState("")
    const addFilms = ()=>{
        axios.post('https://at.usermd.net/api/movies',{title:title,content:description,image:image})
            .then((restore)=>{navigate("/")})
    }

    return (
        <>
            <div>
                <NavBarComponent></NavBarComponent>
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                    <MDBInput wrapperClass='mb-4' label='Tytuł' id='form1' type='text' value={title} onChange={e => setTitle(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4' label='Opis' id='form2' type='textarea' value={description} onChange={e => setDescription(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4' label='Adres zdjęcia' id='form3' type='text' value={image} onChange={e => setImage(e.target.value)}/>


                    <MDBBtn className="mb-4" onClick={()=>{addFilms()}}>Dodaj film</MDBBtn>



                </MDBContainer>
                <Footer></Footer>
            </div>

        </>
    );
}

export default AddFilm;
