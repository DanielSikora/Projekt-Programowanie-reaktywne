import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from "./NavBarComponent";
import { MDBBtn, MDBContainer, MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function AddFilm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [ytLink, setYtLink] = useState("");
  const [author, setAuthor] = useState("");
  const [relaseDate, setReleaseDate] = useState("");

  const addFilms = () => {
    axios.post('http://localhost:3001/api/posts', {
      title: title,
      image: image,
      text: text,
      ytLink: ytLink,
      author: author,
      relaseDate: relaseDate
    })
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.error('Adding film failed:', error);
        alert('Błędne dane');
      });
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'none',
    transform: 'scale(1)',
  };

  const inputStyle = {
    width: '100%', // Zwiększona szerokość pola do wpisywania
  };

  const labelStyle = {
    display: 'block',
    textAlign: 'center', // Wyśrodkowanie tekstu etykiety
    marginBottom: '5px', // Dodany odstęp poniżej etykiet
  };

  return (
    <>
      <div className="default">
        <NavBarComponent />
        <div className="default2">
          <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <div className="mb-4">
              <label style={labelStyle}>Tytuł:</label>
              <MDBInput id='form1' type='text' value={title} onChange={e => setTitle(e.target.value)} style={inputStyle} />
            </div>
            <div className="mb-4">
              <label style={labelStyle}>Adres zdjęcia okładki:</label>
              <MDBInput id='form2' type='textarea' value={image} onChange={e => setImage(e.target.value)} style={inputStyle} />
            </div>
            <div className="mb-4">
              <label style={labelStyle}>Tekst piosenki:</label>
              <MDBTextArea id='form3' type='textarea' rows={10} value={text} onChange={e => setText(e.target.value)} style={inputStyle} />
            </div>
            <div className="mb-4">
              <label style={labelStyle}>Link do piosenki na yt:</label>
              <MDBInput id='form4' type='text' value={ytLink} onChange={e => setYtLink(e.target.value)} style={inputStyle} />
            </div>
            <div className="mb-4">
              <label style={labelStyle}>Autor piosenki:</label>
              <MDBInput id='form5' type='text' value={author} onChange={e => setAuthor(e.target.value)} style={inputStyle} />
            </div>
            <div className="mb-4">
              <label style={labelStyle}>Data wydania:</label>
              <MDBInput id='form6' type='text' value={relaseDate} onChange={e => setReleaseDate(e.target.value)} style={inputStyle} />
            </div>

            <button className="mb-4" onClick={addFilms} style={buttonStyle}>
                  Dodaj piosenke
            </button>
          </MDBContainer>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AddFilm;
