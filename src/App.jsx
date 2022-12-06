import React from 'react';
import { Routes, Route } from 'react-router-dom';
import KalkulatorPage from './pages/KalkulatorPage';
import ForumPage from './pages/ForumPage';
import ArtikelPage from './pages/ArtikelPage';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Authentication/LoginPage';
import RegisterPage from './pages/Authentication/RegisterPage';

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
        <Route path="/artikel" element={<ArtikelPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>

  );
}

export default App;