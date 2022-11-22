import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import KalkulatorPage from './pages/KalkulatorPage';
import ForumPage from './pages/ForumPage';
import ArtikelPage from './pages/ArtikelPage';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kalkulator" element={<KalkulatorPage />} />
        <Route path="/forum" element={<ForumPage />} />
        <Route path="/artikel" element={<ArtikelPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </>
  );
}

export default App;
