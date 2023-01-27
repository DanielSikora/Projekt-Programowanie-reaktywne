import React, {useState} from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
}
    from 'mdb-react-ui-kit';
import NavBarComponent from "./NavBarComponent";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
function Register() {
    const navigate = useNavigate()
    const [login,setLogin]= useState("")
    const [password,setPassword]= useState("")
    const [email,setEmail]= useState("")
    const signUp = ()=>{
        axios.post('https://at.usermd.net/api/user/create',{name:login,password:password,email:email})
            .then((restore)=>{navigate("/signin")})
    }

    return (
        <div>
            <NavBarComponent></NavBarComponent>
        <MDBContainer fluid>

            <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                            <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" >Sign up</p>

                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="user me-3" size='lg'/>
                                <MDBInput label='Your Name' id='form1' type='text' className='w-100' value={login} onChange={e => setLogin(e.target.value)}/>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size='lg'/>
                                <MDBInput label='Your Email' id='form2' type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="lock me-3" size='lg'/>
                                <MDBInput label='Password' id='form3' type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                            </div>


                            <MDBBtn className="mb-4" onClick={()=>{signUp()}}>Zarejestruj</MDBBtn>

                        </MDBCol>
                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
            <Footer></Footer>
        </div>
    );
}
export default Register;
