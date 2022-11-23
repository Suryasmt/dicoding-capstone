import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import BrandLogo from '../assets/logo.png'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <>
            <div id="footer">
                <div className="container-fluid py-4">
                    <div className="container">
                        <div className="row">
                            <div className="footer col-lg-4 col-md-4 col-sm-6 mb-4">
                                <img className="footer-logo" src={BrandLogo} alt='Logo Smart Parent'></img>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="footer col-lg-4 col-md-4 col-sm-6 mb-4">
                                <h6>Address</h6>
                                <p>Jl. Batik Kumeli No.50, Sukaluyu, Kec. Cibeunying Kaler,
                                    Kota Bandung, Jawa Barat 40123</p>
                            </div>
                            <div className="footer col-lg-4 col-md-4 col-sm-6 mb-4">
                                <h6>Stay Tuned</h6>
                                <div className='footer-social'>
                                    <a href="#"><FaFacebookSquare /></a>
                                </div>
                                <div className='footer-social'>
                                    <a href="#"><BsInstagram /></a>
                                </div>
                                <div className='footer-social'>
                                    <a href="#"><BsTwitter /></a>
                                </div>
                            </div>
                            <hr />
                            <p className="footer-copy">Copyright 2022 <AiOutlineCopyrightCircle /> SMART PARENTS</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
