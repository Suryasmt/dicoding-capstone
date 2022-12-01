// import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import KalkulatorPage from './pages/KalkulatorPage';
import ForumPage from './pages/ForumPage';
import ArtikelPage from './pages/ArtikelPage';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
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
        <Route path="/" element={<HomePage />} />
        <Route path="/kalkulator" element={<KalkulatorPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/artikel" element={<ArtikelPage />} />
        <Route path="/forgot" element={<AboutUsPage />} />
        <Route path="/register" element={<AboutUsPage />} />
        <Route path="/login" element={<AboutUsPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
      </AuthContextProvider>
  );
}

export default App;