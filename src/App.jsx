// import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import KalkulatorPage from './pages/KalkulatorPage';
import ForumPage from './pages/ForumPage';
import ArtikelPage from './pages/ArtikelPage';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import LoginPage from './pages/login&regis/LoginPage';
import RegistrasiPage from './pages/login&regis/RegistrasiPage';
import ForgotPasswordPage from './pages/login&regis/ForgotPasswordPage';
import { AuthContextProvider } from './config/authContext';

// import Spinner from 'react-bootstrap/Spinner';

// import { getAuth, onAuthStateChanged } from "firebase/auth"

const App = () => {

  //   // state
  //   const [isLogin, setIsLogin] = useState(false)
  //   const [loading, setLoading] = useState(true)
  
  //     // componentlifecycle
  // useEffect(()=>{
  //   // notifPermission()
  //   // getFCMToken()
  //   const auth = getAuth()
  //   onAuthStateChanged(auth, (result) => {
  //     if(result){
  //       console.info(result)
  //       setIsLogin(true)
  //       setLoading(false)
  //       return
  //     }

  //     setIsLogin(false)
  //     setLoading(false)
  //   })

  // },[])

  // if(loading){
  //   return (
  //     <div className='loading-login'>
  //       <Spinner animation="border" variant="danger" />
  //     </div>
  //   );
  // }

  return (
    <AuthContextProvider>
      <Navigation />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registrasi" element={<RegistrasiPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/kalkulator" element={<KalkulatorPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/artikel" element={<ArtikelPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
 {/* {isLogin ? (
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path="/artikel" element={<ArtikelPage />} />
    <Route path="/about" element={<AboutUsPage />} />
    <Route path='/login' element={<LoginPage/>} />
    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    <Route path='/register' element={<RegistrasiPage/>} />
    <Route path='*' element={<RegistrasiPage />} />
  </Routes>
) : (
  <Routes>
    <Route path="/kalkulator" element={<KalkulatorPage />} />
    <Route path="/forum" element={<ForumPage />} />
    <Route path='*' element={<HomePage />} />
  </Routes>
      )} */}
      <Footer />
    </AuthContextProvider>
  );
}

export default App;