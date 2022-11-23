import React from 'react'
import aboutImg from '../assets/Image 4.jpg'

const AboutUsPage = () => {
  return (
    <div className='box-content'>
      <div className='about'>
        <div className="about-image">
          <img src={aboutImg} alt='aboutImage'/>
        </div>
        <div className='about-text'>
          <h1 className='about-text__title'>
            About Us
          </h1> 
          <p className='about-text__decs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas vero esse unde repellat laudantium assumenda animi molestiae incidunt similique tempore explicabo, hic labore cum maiores repellendus corporis quam. Obcaecati.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage;
