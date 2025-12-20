import React from 'react';
import { Link } from 'react-router-dom';
import emailIcon from '../assets/svg/email.svg';
import phoneIcon from '../assets/svg/phone.svg';
import { ContactForm } from './contactForm.js';
import '../css/contact.css';

export default function Contact() {
    return (
        <div className="contact-container container-fluid">

            <div className='row justify-content-center'>
                <div className="col-11 pt-5 pb-3 py-sm-5">
                    <h1 className="contactPageHeading">
                        Contact me!
                    </h1>
                </div>

                <div className="row justify-content-center d-none d-sm-flex">
                    <div className="col-11 heroSection">

                        <div className="row align-items-center">
                            {/* LEFT: TEXT */}
                            <div className="col-7 d-flex">
                                <div className="contactInformationTextWrapper">

                                    {/* EMAIL */}
                                    <div className="row pb-4 emailContact">
                                        <div className="col-auto d-flex align-items-center">
                                            <img
                                                src={emailIcon}
                                                alt="Email icon"
                                                className="email-icon"
                                            />
                                        </div>
                                        <div className="col d-flex align-items-center">
                                            <p>laura.em.walden@gmail.com</p>
                                        </div>
                                    </div>

                                    {/* PHONE NUMBER */}
                                    <div className="row pb-4 phoneNumber">
                                        <div className="col-auto d-flex align-items-center">
                                            <img
                                                src={phoneIcon}
                                                alt="Phone icon"
                                                className="phone-icon"
                                            />
                                        </div>
                                        <div className="col d-flex align-items-center">
                                            <p>+358 045-272 0123</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: CV POP-UP BUTTON */}
                            <div className="col-5 d-flex justify-content-center">
                                <Link to="/contact" >
                                    <button className="btn btn-primary">
                                        Contact me!
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="contactForm col-11">
                    < ContactForm />
                </div>


            </div>
        </div>


    );
}   