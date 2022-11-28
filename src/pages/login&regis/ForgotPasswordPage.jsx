import React, { useState } from 'react';
import { MDBBtn,MDBContainer,MDBRow,MDBCol,MDBInput } from 'mdb-react-ui-kit';
import loginImage from '../../assets/login-image.jpg';
import logo from '../../assets/logo.png';

const ForgotPasswordPage= () => {
    const [username, setUsername] = useState('');
    
    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    return (
        <MDBContainer fluid>
            <MDBRow>
            <MDBCol sm='6'>
                <div className='d-flex flex-row ps-5 pt-5'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>
                    <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
                    <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg" value={username} onChange={onChangeUsername} />
                    <MDBBtn className="mb-4 px-5 mx-5 w-100" color='danger' size='lg'>Login</MDBBtn>
                </div>
            </MDBCol>
            <MDBCol sm='6' className='d-none d-sm-block px-0'>
                <img src={loginImage} alt="bg" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    )
}

export default ForgotPasswordPage
