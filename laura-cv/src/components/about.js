import React from 'react';
import '../css/about.css';

import profilePicture from '../assets/webp/profilePicture.webp'

export default function About() {
    return (
        <div className="about-container container-fluid">
            <div className='row justify-content-center align-items-center py-5'>
                
                <div className='col-xl-10 col-md-12'>
                    <h1>LAURA WALDEN *</h1>
                </div>

                <div className='col-xl-5 col-md-6'>
                    <img className='profilePicture' src={profilePicture} alt="Profile picture"/>
                </div>

                <div className='col-xl-5 col-md-6'>
                    <p>Lighting designer</p>
                    <p>Based in Helsinki, Finland</p>
                </div>

                <div className='col-xl-5 col-md-6'>
                    <p>More text</p>
                </div>

            </div>
        </div>
    );
}
