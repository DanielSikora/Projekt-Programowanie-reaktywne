import React, { useState } from 'react';
import { MDBContainer, MDBInput, MDBRow, MDBCol, MDBCard } from 'mdb-react-ui-kit';
import NavBarComponent from './NavBarComponent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    axios
      .post('http://localhost:3001/api/user/auth', {
        login: login,
        password: password,
      })
      .then((response) => {
        localStorage.setItem('token', response.data['token']);
        navigate('/');
      })
      .catch((error) => {
        console.error('Login failed:', error);
        alert('Nieprawidłowe dane logowania');
      });
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '14px 24px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'none',
    transform: 'scale(1)',
    marginRight: '8px',
  };

  const formContainerStyle = {
    backgroundColor: '#fff',
    borderRadius: '15px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '100%',
  };

  return (
    <div className="default" style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBarComponent />
      <div className="default2 d-flex justify-content-center align-items-center flex-grow-1">
        <MDBContainer>
          <MDBCard className="text-black m-5" style={{ borderRadius: '25px' }}>
            <MDBRow className="justify-content-center">
              <MDBCol md="6">
                <MDBContainer className="p-3 my-5" style={formContainerStyle}>
                  <MDBInput wrapperClass="mb-4" label="Login" id="form1" type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
                  <MDBInput wrapperClass="mb-4" label="Password" id="form2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <button className="mb-4" onClick={signIn} style={buttonStyle}>
                    Zaloguj
                  </button>
                </MDBContainer>
              </MDBCol>
              <MDBCol md="6">
                <div style={{ paddingRight: '20px' }}>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    alt="Login Image"
                    style={imageStyle}
                  />
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      </div>
      <Footer style={{ flexShrink: 0 }} />
    </div>
  );
}

export default Login;
