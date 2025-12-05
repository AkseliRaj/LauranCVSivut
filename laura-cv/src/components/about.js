import React from 'react';
import '../css/about.css';
import { Link } from "react-router-dom";

import profilePicture from '../assets/webp/profilePicture.webp'
import lampIcon from '../assets/svg/lamp.svg';
import locationIcon from '../assets/svg/location.svg';

export default function About() {
    return (
        <div className="about-container container-fluid">
            <div className='row justify-content-center align-items-center p-5'>

                {/*HERO SECTION*/}
                <div className='col-xl-11 col-md-12 py-5'>
                    <h1>LAURA WALDEN *</h1>
                </div>

                <div className='col-xl-5 col-md-6 pb-5'>
                    <img className='profilePicture img-fluid' src={profilePicture} alt="Profile picture" />
                </div>

                <div className='col-xl-6 col-md-6'>
                    <div className="d-flex align-items-center gap-2">
                        <img src={lampIcon} alt="Lamp icon" />
                        <p className="mb-0">Lighting designer</p>
                    </div>

                    <div className="d-flex align-items-center gap-2 mt-5">
                        <img src={locationIcon} alt="Location icon" />
                        <p className="mb-0">Based in Helsinki, Finland</p>
                    </div>

                    <div className='d-flex align-middle'>
                        <button className="btn btn-primary mt-5 ms-3">Contact me!</button>
                    </div>
                </div>

                {/*BIO*/}

                <div className='bioSection col-xl-11 col-md-12 p-5'>
                    <h1 className='pb-5'>BIO</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                {/*Link to Gallery*/}

                <div className='col-xl-11 col-md-12 p-5 text-center'>
                    <h1>Check out all my works <a href="/gallery" className='galleryLink'>here</a> </h1>
                </div>
                
            </div>
        </div>
    );
}
