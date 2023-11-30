import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBInput,
} from 'mdb-react-ui-kit';
import NavBarComponent from './NavBarComponent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';

function Register() {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const signUp = () => {
    axios
      .post('http://localhost:3001/api/user/create', {
        name: login,
        password: password,
        email: email,
      })
      .then((response) => {
        navigate('/signin');
      })
      .catch((error) => {
        console.error('Registration failed:', error);
        alert('Błędne dane');
      });
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50', // Zielony kolor tła
    color: '#fff', // Biały kolor tekstu
    padding: '14px 24px', // Rozmiar wewnętrznego odstępu przycisku
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'none', // Usunięcie efektu zmiany wyglądu po najechaniu
    transform: 'scale(1)', // Dodane, aby uniknąć efektu powiększania
  };

  return (
    <div className="default" style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBarComponent />
      <div className="default2 d-flex justify-content-center align-items-center flex-grow-1">
        <MDBContainer>
          <MDBCard className="text-black m-5" style={{ borderRadius: '25px' }}>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>

                <div className="mb-4">
                  <label htmlFor="form1" className="form-label me-3">
                    Your Name
                  </label>
                  <input
                    id="form1"
                    type="text"
                    className="form-control"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="form2" className="form-label me-3">
                    Your Email
                  </label>
                  <input
                    id="form2"
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="form3" className="form-label me-3">
                    Password
                  </label>
                  <input
                    id="form3"
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  className="mb-4"
                  onClick={signUp}
                  style={buttonStyle}
                >
                  Zarejestruj
                </button>
              </MDBCol>
              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      </div>
      <Footer style={{ flexShrink: 0 }} />
    </div>
  );
}

export default Register;
