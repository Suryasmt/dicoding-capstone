import React from "react";
import Footer from "../components/Footer";
import Content from "../components/HomeItem/Content";
import Navigation from "../components/Navigation";
// import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
