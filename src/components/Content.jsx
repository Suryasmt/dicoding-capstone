import React from 'react';
import { FaCalculator } from 'react-icons/fa';
import { RiDiscussFill } from 'react-icons/ri';
import { BsBookFill } from 'react-icons/bs';
// import { Container } from 'react-bootstrap';
// import Article from './Article';


const Content = () => {
  return (
    <>
      <div className='container-item'>
        <p className='item-motto__text'>Percayakan setiap fase kehamilan dan perkembangan si kecil kepada smart parents</p>
      </div>
      <div className='container-article'>
        <h1 className='article__title'>Artikel Terkait</h1>
        {/* <Container className='d-flex justify-content-around'>
          <Article />
          <Article />
          <Article />
        </Container> */}
      </div>
      <div className='container-item border'>
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
    </>
  )
}

export default Content;
