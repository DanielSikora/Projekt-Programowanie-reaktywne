import React, {useState} from 'react';
import {MDBBtn, MDBCheckbox, MDBContainer, MDBIcon, MDBInput} from "mdb-react-ui-kit";
import NavBarComponent from "./NavBarComponent";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";


function Login() {

    const navigate = useNavigate()
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const signIn = () => {
        axios.post('https://at.usermd.net/api/user/auth', {login: login, password: password})
            .then((restore) => {
                localStorage.setItem("token", restore.data["token"]);
                window.location.href = "/"
            })
    }
    return (
        <div className="default">
            <NavBarComponent></NavBarComponent>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                <MDBInput wrapperClass='mb-4' label='Login' id='form1' type='text' value={login}
                          onChange={e => setLogin(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password}
                          onChange={e => setPassword(e.target.value)}/>
                <MDBBtn className="mb-4" onClick={() => {
                    signIn()
                }}>Zaloguj</MDBBtn>
            </MDBContainer>
            <Footer></Footer>
        </div>
    );
}

export default Login;
