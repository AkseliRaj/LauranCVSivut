import React from 'react';
import linkIcon from '../assets/svg/human.svg';
import socialIcon from '../assets/svg/socialSpeechBubble.svg';
import dinoIcon from '../assets/svg/dino.svg';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer-container container-fluid">
            <div className='row'>
                {/*LINKS*/}
                <div className='col-3'>
                    <div className='row'>
                        <div className="col-auto">
                            <img src={linkIcon} alt="Link icon" />
                        </div>
                        <div className="col-auto d-flex align-items-center">
                            <h2>Links</h2>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*SOCIALS*/}
                <div className='col-3'>
                    <div className='row'>
                        <div className="col-auto">
                            <img src={socialIcon} alt="Social icon" />
                        </div>
                        <div className="col-auto d-flex align-items-center">
                            <h2>Socials</h2>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <p><a class="link-opacity-80-hover" href="https://www.facebook.com/laura.walden.3591" target='_blank' rel="noopener noreferrer">Facebook</a></p>
                        </li>
                        <li>
                            <p><a class="link-opacity-80-hover" href="https://www.instagram.com/laurawwho/" target='_blank' rel="noopener noreferrer">Instagram</a></p>
                        </li>
                        <li>
                            <p><a class="link-opacity-80-hover" href="https://pinterest.com/laurawwho/" target='_blank' rel="noopener noreferrer">Pinterest</a></p>
                        </li>
                    </ul>
                </div>
                {/*CREDITS*/}
                <div className='col-6'>
                    <div className='row align-middle'>
                        <div className="col-2">
                            <img src={dinoIcon} alt="Dino icon" />
                        </div>
                        <div className="col-2">
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