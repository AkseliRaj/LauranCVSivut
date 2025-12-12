import React from 'react';
import linkIcon from '../assets/svg/human.svg';
import socialIcon from '../assets/svg/socialSpeechBubble.svg';
import dinoIcon from '../assets/svg/dino.svg';
import { Link } from "react-router-dom";
import '../css/footer.css';

export default function Footer() {
    return (
        <div className="footer-container container-fluid">
            <div className='row'>

                {/*LINKS*/}
                <div className='col-3 p-5'>
                    <div className='siteLinkHeader row pb-4'>
                        <div className="col-auto">
                            <img src={linkIcon} alt="Link icon" />
                        </div>
                        <div className="col-auto d-flex align-items-center ">
                            <h2>Links</h2>
                        </div>
                    </div>
                    <div className='siteLinks'>
                        <ul>
                            <li className='pb-2'>
                                <Link to="/about">About</Link>
                            </li>
                            <li className='pb-2'>
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li className='pb-2'>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*SOCIALS*/}
                <div className='col-3 p-5'>
                    <div className='socialLinksHeader row pb-4'>
                        <div className="col-auto">
                            <img src={socialIcon} alt="Social icon" />
                        </div>
                        <div className="col-auto d-flex align-items-center">
                            <h2>Socials</h2>
                        </div>
                    </div>
                    <div className='socialLinks'>
                        <ul>
                            <li className='pb-2'>
                                <a class="link-opacity-80-hover" href="https://www.facebook.com/laura.walden.3591" target='_blank' rel="noopener noreferrer">Facebook</a>
                            </li>
                            <li className='pb-2'>
                                <a class="link-opacity-80-hover" href="https://www.instagram.com/laurawwho/" target='_blank' rel="noopener noreferrer">Instagram</a>
                            </li>
                            <li className='pb-2'>
                                <a class="link-opacity-80-hover" href="https://pinterest.com/laurawwho/" target='_blank' rel="noopener noreferrer">Pinterest</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*CREDITS*/}
                <div className='creaditsHeader col-6 d-flex align-items-center p-5'>
                    <div className='row d-flex align-items-center'>
                        <div className="col-3">
                            <img src={dinoIcon} alt="Dino icon" />
                        </div>
                        <div className="col-1 align-items-end">
                            <p>—</p>
                        </div>
                        <div className="col-8">
                            <h2>Site designed by <a href="https://akselirajahalme.fi/" target="_blank" rel="noopener noreferrer">Akseli Rajahalme</a></h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}   