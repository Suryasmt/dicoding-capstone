import React from 'react';
import aboutImg from '../assets/Image 4.jpg';

const AboutUsPage = () => {
  return (
    <div className='box-content'>
      <div className='about'>
        <div className='about-image'>
          <img src={aboutImg} alt='aboutImage' />
        </div>
        <div className='about-text'>
          <h1 className='about-text__title'>About Us</h1>
          <p className='about-text__decs'>
            Smart parents merupakan website yang dibuat dengan tujuan untuk mencerdaskan orang tua di Indonesia, terutama orang tua muda yang masih awam dengan fase kehamilan, fase melahirkan, dan fase parenting atau fase mengasuh anak.
            Fitur yang ada pada website ini adalah kalkulator kehamilan, artikel, dan forum diskusi. Dengan adanya website ini diharapkan dapat meningkatkan pengetahuan orang tua muda sehingga lebih siap dan tidak ada lagi kasus seperti
            memberikan mpasi kepada anak sebelum waktunya, mengobati anak yang sakit dengan cara aneh atau kuno yang tidak sesuai dengan petunjuk dokter, dan kasus-kasus lainnya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
