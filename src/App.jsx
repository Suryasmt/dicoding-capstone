import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import NotFound from './pages/NotFound';
import RoomChat from './pages/ChatPage/RoomChat';


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ArtikelPg1" element={<ARTIKELPAGE_SATU />} />
        <Route path="/ArtikelPg2" element={<ARTIKELPAGE_DUA />} />
        <Route path="/ArtikelPg3" element={<ARTIKELPAGE_TIGA />} />
        <Route path= "/message" element={<RoomChat />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/trimester1" element={<TRIMESTER_SATU />} />
        <Route path="/trimester2" element={<TRIMESTER_DUA />} />
        <Route path="/trimester3" element={<TRIMESTER_TIGA />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default App;
