import React from 'react'
import fadli from '../assets/fadli.jpg'
import surya from '../assets/surya.jpg'
import gigih from '../assets/gigih.jpg'
import siti from '../assets/siti.jpg'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
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
            <p>Smart Parents adalah website yang berisi informasi seputar kehidupan keluarga sehari-hari yang berfokus kepada kesehatan, tumbuh kembang anak, parenting dan kehamilan. Kami berkomitmen dan berusaha untuk memberikan beragam informasi yang menarik dan up to date sehingga dapat menambah wawasan bagi ibu hamil dan keluarga.</p>
          </div>

          <div className='card-about-sp1'>
            <div className='about-sp1'>
              <h3>Disclaimer</h3>
              <p>Penting untuk dipahami bahwa, bagimanapun juga, informasi yang disediakan oleh Smart Parents tidak dapat digunakan sebagai acuan pengganti konsultasi kehamilan. Anda diwajibkan untuk tetap berkonsultasi dengan dokter ataupun tenaga kesehatan berlisensi mengenai pertanyaan yang anda miliki seputar kondisi kehamilan. Jangan pernah mengabaikan saran medis profesional atau menunda bantuan karena sesuatu yang telah anda baca di situs kami.</p>
            </div>
          </div>

          <div className='about-sp2'>
            <h3>Live Chat</h3>
            <p>Kami juga menyediakan forum live chat untuk bertanya maupun menjawab seputar masalah dalam kehamian dan parenting dengan pengguna lain maupun para profesional di dalamnya.</p>
            <div className='button-di-about'>
              <p>Mari bergabung diforum kami
              <Link to="/">
                <button className='button-to-chat'>Klik Disini</button>
              </Link>
              </p>
            </div>
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
