import React, { useState, useEffect } from 'react';
import { MDBBtn,MDBContainer,MDBRow,MDBCol,MDBInput } from 'mdb-react-ui-kit';
import loginImage from '../../assets/login-image.jpg';
import logo from '../../assets/logo.png';
import { UserAuth } from '../../config/authContext';
import { useNavigate } from "react-router-dom"

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { user, logIn, googleSignIn } = UserAuth()
    const navigate = useNavigate()
  
    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.log(error)
      }
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault()
      setError('')
      try {
        await logIn(email, password)
        navigate('/')
      } catch (error) {
        alert(error)
        setError(error)
      }
    };
  
    useEffect(() => {
      if (user != null) {
        navigate('/');
      }
    });
  
    return (
        <MDBContainer fluid>
            <MDBRow>
            <MDBCol sm='6'>
                <div className='d-flex flex-row ps-5 pt-5'>
                    <img src={logo} alt="logo" />
                </div>
                {error ? <p>{error}</p> : null}
                <form onSubmit={handleSubmit}>
                <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                    <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={(event) => setEmail(event.target.value)} required/>
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={(event) => setPassword(event.target.value)} required/>
                    <MDBBtn className="mb-4 px-5 mx-5 w-100" color='danger' type="submit" size='lg'>Login</MDBBtn>
                    <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
                    <p className='ms-5'>Belum punya akun? <a href="/registrasi" class="link-info">Daftar disini</a></p>
                    <MDBBtn 
                    className="mb-4 px-5 mx-5 w-100" color='danger' size='lg' 
                    type='button' 
                    onClick={handleGoogleSignIn}
                    >
                        google
                    </MDBBtn>
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

export default LoginPage