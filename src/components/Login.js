import React from 'react';
import {MDBBtn, MDBCheckbox, MDBContainer, MDBIcon, MDBInput} from "mdb-react-ui-kit";
import NavBarComponent from "./NavBarComponent";


function Login() {
    return (
        <div>
            <NavBarComponent></NavBarComponent>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>



            <MDBBtn className="mb-4">Sign in</MDBBtn>



        </MDBContainer>
        </div>
    );
}

export default Login;
