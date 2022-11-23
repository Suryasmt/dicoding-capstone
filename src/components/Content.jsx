import React from 'react';
import { FaCalculator } from 'react-icons/fa';
import { RiDiscussFill } from 'react-icons/ri';
import { BsBookFill } from 'react-icons/bs';
import gallery1 from '../assets/Image 1.jpg'
import gallery2 from '../assets/Image 2.jpg'
import gallery3 from '../assets/Image 3.jpg'
// import { Container } from 'react-bootstrap';
// import Article from './Article';


const Content = () => {
  return (
    <>
      <div className='box-item'>
        <p className='item-motto__text'>Percayakan setiap fase kehamilan dan perkembangan si kecil kepada smart parents</p>
      </div>
      <div className='box-content'>
        <div className='content-info'>
            <div className="content-info__inner">
                <h1 className="content-info__title">Smart Parent</h1>
                <p className="content-info__desc">
                  Smart parents merupakan website yang dibuat dengan tujuan untuk mencerdaskan orang tua di Indonesia, terutama orang tua muda agar memiliki pengetahuan yang cukup mengenai fase kehamilan dan fase parenting atau fase mengasuh anak.
                </p>
            </div>
            <div className="content-info__images">
                <img className='image-1' src={gallery1} alt="" />
                <img className='image-2' src={gallery2} alt="" />
                <img className='image-3' src={gallery3} alt="" />
            </div>
        </div>
      </div>
      <div className='box-item'>
            <span className='item-fitur__icon'>
                <FaCalculator />
                <p className='item-fitur__title'>
                    Kalkulator Kehamilan
                </p>
            </span>
            <span className='item-fitur__icon'>
                <RiDiscussFill />
                <p className='item-fitur__title'>
                    Forum Diskusi
                </p>
            </span>
            <span className='item-fitur__icon'>
                <BsBookFill />
                <p className='item-fitur__title'>
                    Artikel Keluarga
                </p>
            </span>
      </div>
      <div className='box-content'>
        <h1 className='article__title'>Artikel Terkait</h1>
      </div>
    </>
  )
}

export default Content;
