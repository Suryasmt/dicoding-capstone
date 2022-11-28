import { MDBBtn,MDBContainer,MDBRow,MDBCol,MDBInput } from 'mdb-react-ui-kit';
import loginImage from '../../assets/login-image.jpg';
import logo from '../../assets/logo.png';
import { UserAuth } from "../../config/authContext";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {

    const { googleSignIn, user, signUp } = UserAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    // const handleGoogleRegister = (e)=>{
    //     e.preventDefault()
    //     const email = e.target.email.value
    //     const password = e.target.password.value
    //     const password2 = e.target.password2.value

    //     if(!email || !password || !password2){
    //         return alert("silakan lengkapi data")
    //     }

    //     if(password !== password2){
    //         return alert("password harus sama")
    //     }

    //     if(password.length < 6){
    //         return alert("password harus lebih dari 6 karakter")
    //     }
        
    //     const auth = getAuth()
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((result)=>{
    //         localStorage.setItem('user', JSON.stringify(result.user))
    //     })
    //     .catch((err)=>{
    //         console.error(err)
    //     })
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await signUp(email, password);
          navigate("/login");
        } catch (error) {
          alert(error, "Invalid Email");
        }
      };
    
      useEffect(() => {
        if (user != null) {
          navigate("");
        }
      });

  return (
    <MDBContainer fluid>
            <MDBRow>
            <MDBCol sm='6'>
                <div className='d-flex flex-row ps-5 pt-5'>
                    <img src={logo} alt="logo" />
                </div>
                <form onSubmit={handleSubmit}>
                <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                    <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Daftar</h3>
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={(event) => setEmail(event.target.value)} required/>
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={(event) => setPassword(event.target.value)} required/>
                    
                    <MDBBtn 
                    className="mb-4 px-5 mx-5 w-100" color='danger' size='lg' type='submit'>
                        Daftar
                    </MDBBtn>
                    
                    <MDBBtn 
                    className="mb-4 px-5 mx-5 w-100" color='danger' size='lg' 
                    type='button' 
                    onClick={handleGoogleSignIn}>
                        google
                    </MDBBtn>
                    <p className='ms-5'>Sudah punya akun? <a href="/login" class="link-info">Masuk</a></p>
                </div>
                </form>
            </MDBCol>
            <MDBCol sm='6' className='d-none d-sm-block px-0'>
                <img src={loginImage} alt="bg" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  )
}

export default RegisterPage
