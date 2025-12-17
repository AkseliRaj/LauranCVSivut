import React from 'react';
import linkIcon from '../assets/svg/human.svg';
import socialIcon from '../assets/svg/socialSpeechBubble.svg';
import dinoSpeechIcon from '../assets/svg/dinoSpeech.svg';
import { Link } from "react-router-dom";
import '../css/footer.css';

export default function Footer() {
    return (
        <div className="footer-container container-fluid">
            <div className='row p-5'>

                {/*LINKS*/}
                <div className='col-12 col-sm-6 col-lg-3 pb-5 pb-sm-0'>
                    <div className='siteLinkHeader row pb-4'>
                        <div className="col-auto d-flex align-items-center">
                            <img 
                            src={linkIcon} 
                            alt="Link icon"
                            className='site-links-icon'
                            />
                        </div>
                        <div className="col-auto d-flex align-items-center ">
                            <h2>Links</h2>
                        </div>
                    </div>
                    <div className='siteLinks'>
                        <ul>
                            <li className='pb-2 pb-xxl-0'>
                                <Link to="/about">About</Link>
                            </li>
                            <li className='pb-2 pb-xxl-0'>
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*SOCIALS*/}
                <div className='col-12 col-sm-6 col-lg-3 pb-4 pb-lg-0'>
                    <div className='socialLinksHeader row pb-4'>
                        <div className="col-auto d-flex align-items-center">
                            <img
                                src={socialIcon}
                                alt="Social icon"
                                className='social-icon'
                            />
                        </div>
                        <div className="col-auto d-flex align-items-center">
                            <h2>Socials</h2>
                        </div>
                    </div>
                    <div className='socialLinks'>
                        <ul>
                            <li className='pb-2 pb-xxl-0'>
                                <a class="link-opacity-80-hover" href="https://www.facebook.com/laura.walden.3591" target='_blank' rel="noopener noreferrer">Facebook</a>
                            </li>
                            <li className='pb-2 pb-xxl-0'>
                                <a class="link-opacity-80-hover" href="https://www.instagram.com/laurawwho/" target='_blank' rel="noopener noreferrer">Instagram</a>
                            </li>
                            <li>
                                <a class="link-opacity-80-hover" href="https://pinterest.com/laurawwho/" target='_blank' rel="noopener noreferrer">Pinterest</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*CREDITS*/}
                <div className='creaditsHeader col-12 col-lg-6 pt-3 d-flex align-items-center'>
                    <div className='row d-flex align-items-center '>
                        <div className="col-3 d-none d-md-block">
                            <img
                                src={dinoSpeechIcon}
                                alt="Dino icon"
                                className="dino-speech-icon"
                            />
                        </div>
                        <div className="col-11 col-sm-9 d-flex align-items-center">
                            <h2>Site designed by <a href="https://akselirajahalme.fi/" target="_blank" rel="noopener noreferrer"><br className='d-none d-lg-block' />Akseli Rajahalme</a></h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}   