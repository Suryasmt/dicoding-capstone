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
                            <div className="footer col-lg-3 col-md-4 col-sm-6 mb-4">
                                <img className="footer-logo" src={BrandLogo} alt='Logo Smart Parent'></img>
                                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
                            </div>
                            <div className="footer col-lg-5 col-md-4 col-sm-6 mb-4">
                                <h6>Address</h6>
                                <p>Gedung SmartParents, Jl. HR Rasuna Said Kav. B32-33, Jakarta Selatan 12940</p>
                                <p>Phone: +62 21-5095-9900</p>
                                <p>Email: help@smartparents.com</p>
                            </div>
                            <div className="footer col-lg-4 col-md-4 col-sm-6 mb-2">
                                <h6>Stay Tuned</h6>
                                <div className='footer-social'>
                                    <a href="/#"><FaFacebookSquare className='icon-footer'/></a>
                                </div>
                                <div className='footer-social'>
                                    <a href="/#"><BsInstagram className='icon-footer'/></a>
                                </div>
                                <div className='footer-social'>
                                    <a href="/#"><BsTwitter className='icon-footer'
                                    /></a>
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
