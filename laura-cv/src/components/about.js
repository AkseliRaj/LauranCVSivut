import React from 'react';
import '../css/about.css';

import profilePicture from '../assets/webp/profilePicture.webp'
import lampIcon from '../assets/svg/lamp.svg';
import locationIcon from '../assets/svg/location.svg';

export default function About() {
    return (
        <div className="about-container container-fluid">
            <div className='row justify-content-center align-items-center py-5'>

                {/*HERO SECTION*/}
                <div className='col-xl-10 col-md-12'>
                    <h1>LAURA WALDEN *</h1>
                </div>

                <div className='col-xl-5 col-md-6'>
                    <img className='profilePicture img-fluid' src={profilePicture} alt="Profile picture" />
                </div>

                <div className='col-xl-5 col-md-6'>
                    <div className="d-flex align-items-center gap-2">
                        <img src={lampIcon} alt="Lamp icon" />
                        <p className="mb-0">Lighting designer</p>
                    </div>

                    <div className="d-flex align-items-center gap-2 mt-5">
                        <img src={locationIcon} alt="Location icon" />
                        <p className="mb-0">Based in Helsinki, Finland</p>
                    </div>
                </div>


            </div>
        </div>
    );
}
