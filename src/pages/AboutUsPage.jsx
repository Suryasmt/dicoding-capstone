import React from 'react'
import fadli from '../assets/fadli.jpg'
import surya from '../assets/surya.jpg'
import gigih from '../assets/gigih.jpg'
import siti from '../assets/siti.jpg'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation/Navigation'

const AboutUsPage = () => {
  return (
    <>
      <Navigation />
      <div className='box-content-about'>
        <div className='about-text'>
          <h1 className='about-text__title'>
            About Us
          </h1>
        </div>

        <div className='container-about-us'>
          <div className='about-sp'>
            <h2>Smart Parents</h2>
            <p>Smart Parents adalah Platform untuk membantu para calon orang tua/orang tua yang masih awam tentang Kehamilan, Kelahiran, dan mendidik anak atau parenting.  Fitur yang tersedia yaitu Fitur Kalkulator Kelahiran adalah untuk mengetahui waktu bayi yang akan lahir, Fitur Artikel adalah fitur yang berisi tentang  kehamilan, kelahiran, dan parenting, dan Fitur Forum Diskusi adalah fitur untuk sharing dan memberi solusi kepada orang tua yang memiliki masalah seputar kehamilan, kelahiran, dan parenting.</p>
          </div>

          <div className='our-team-text'>
            <h2>Our Team</h2>
            <div className='card-team'>
              <div className='card-about-us'>
                <div className="user-card">
                  <img src={fadli} alt="" />
                </div>
                <div className='desc-card'>
                  <h4>Muhammad Fadli Purnama</h4>
                  <p>Universitas Raharja</p>
                </div>
              </div>
              <div className='card-about-us'>
                <div className="user-card">
                  <img src={surya} alt="" />
                </div>
                <div className='desc-card'>
                  <h4>Surya Sumirat</h4>
                  <p>Universitas Muhammadiyah Surakarta</p>
                </div>
              </div>
              <div className='card-about-us'>
                <div className="user-card">
                  <img src={gigih} alt="" />
                </div>
                <div className='desc-card'>
                  <h4>Gigih Sulistianto</h4>
                  <p>Universitas Raharja</p>
                </div>
              </div>
              <div className='card-about-us'>
                <div className="user-card">
                  <img src={siti} alt="" />
                </div>
                <div className='desc-card'>
                  <h4>Siti Suharyanti</h4>
                  <p>Universitas AMIKOM yogyakarta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUsPage;
