// import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import KalkulatorPage from './pages/KalkulatorPage';
import ForumPage from './pages/ForumPage';
import ARTIKELPAGE_SATU from './pages/ArtikelPage/ArtikelPg1';
import ARTIKELPAGE_DUA from './pages/ArtikelPage/ArtikelPg2';
import ARTIKELPAGE_TIGA from './pages/ArtikelPage/ArtikelPg3';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Authentication/LoginPage';
import RegisterPage from './pages/Authentication/RegisterPage';
import TRIMESTER_SATU from './pages/KehamilanPage/trimester1'
import TRIMESTER_DUA from './pages/KehamilanPage/trimester2'
import TRIMESTER_TIGA from './pages/KehamilanPage/trimester3'

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
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kalkulator" element={<KalkulatorPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/ArtikelPg1" element={<ARTIKELPAGE_SATU />} />
        <Route path="/ArtikelPg2" element={<ARTIKELPAGE_DUA />} />
        <Route path="/ArtikelPg3" element={<ARTIKELPAGE_TIGA />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/trimester1" element={<TRIMESTER_SATU />} />
        <Route path="/trimester2" element={<TRIMESTER_DUA />} />
        <Route path="/trimester3" element={<TRIMESTER_TIGA />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>

  );
}

export default App;