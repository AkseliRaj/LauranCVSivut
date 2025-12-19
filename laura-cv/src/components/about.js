import React from 'react';
import '../css/about.css';
import { Link } from 'react-router-dom';

import profilePicture from '../assets/webp/profilePicture.webp';
import lampIcon from '../assets/svg/lamp.svg';
import locationIcon from '../assets/svg/location.svg';

export default function About() {
    return (
        <div className="about-container container-fluid">

            {/* HERO NAME */}
            <div className="row justify-content-center">
                <div className="col-11 pt-5 pb-3 py-sm-5">
                    <h1 className="nameHeading">
                        LAURA <br className="d-block d-sm-none" /> WALDEN *
                    </h1>
                </div>
            </div>

            {/* HERO SECTION (DESKTOP ONLY) */}
            <div className="row justify-content-center d-none d-sm-flex">
                <div className="col-11 heroSection">
                    <div className="row align-items-center">

                        {/* LEFT: IMAGE */}
                        <div className="col-5">
                            <img
                                className="profilePicture img-fluid"
                                src={profilePicture}
                                alt="Profile picture"
                            />
                        </div>

                        {/* RIGHT: TEXT */}
                        <div className="col-7 d-flex justify-content-center">
                            <div className="heroTextWrapper">

                                {/* OCCUPATION */}
                                <div className="row pb-4 heroOccupation">
                                    <div className="col-auto d-flex align-items-center">
                                        <img
                                            src={lampIcon}
                                            alt="Lamp icon"
                                            className="lamp-icon"
                                        />
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <h2>Lighting designer</h2>
                                    </div>
                                </div>

                                {/* LOCATION */}
                                <div className="row pb-4 heroLocation">
                                    <div className="col-auto d-flex align-items-center">
                                        <img
                                            src={locationIcon}
                                            alt="Location icon"
                                            className="location-icon"
                                        />
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <h2>Based in Helsinki, Finland</h2>
                                    </div>
                                </div>
                                <Link to="/contact">
                                    <button className="btn btn-primary mt-3">
                                        Contact me!
                                    </button>
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* HERO SECTION (PHONE ONLY) */}
            <div className="row justify-content-center d-sm-none">
                <div className="col-11 heroSection">

                    <div className="row">

                        {/* TEXT CONTENT */}
                        <div className="col-12">

                            {/* OCCUPATION */}
                            <div className="row pb-2 heroOccupation">
                                <div className="col-auto d-flex align-items-center">
                                    <img
                                        src={lampIcon}
                                        alt="Lamp icon"
                                        className="lamp-icon"
                                    />
                                </div>
                                <div className="col-auto d-flex align-items-center">
                                    <h2>Lighting designer</h2>
                                </div>
                            </div>

                            {/* LOCATION */}
                            <div className="row heroLocation">
                                <div className="col-auto d-flex align-items-center">
                                    <img
                                        src={locationIcon}
                                        alt="Location icon"
                                        className="location-icon"
                                    />
                                </div>
                                <div className="col-auto d-flex align-items-center">
                                    <h2>Based in Helsinki, <br /> Finland</h2>
                                </div>
                            </div>

                        </div>

                        {/* IMAGE */}
                        <div className="col-12 pt-5">
                            <img
                                className="profilePicture img-fluid"
                                src={profilePicture}
                                alt="Profile picture"
                            />
                        </div>

                    </div>
                </div>
            </div>



            {/* BIO SECTION */}
            <div className="row justify-content-center align-items-center bioSection">
                <div className="col-11">
                    <div className="bioBorder p-lg-5 p-4">
                        <h1 className="pb-lg-4 pb-md-2">BIO</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                        <div className="pt-4 d-sm-none">
                            <Link to="/contact" >
                                <button className="btn btn-primary">
                                    Contact me!
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* GALLERY LINK */}
            <div className="row justify-content-center align-items-center">
                <div className="col-11 text-center galleryLinkSection">
                    <h1 className="galleryLinkHeader">
                        Check out all my works{' '}
                        <Link to="/gallery" className="galleryLink">
                            here
                        </Link>
                    </h1>
                </div>
            </div>

        </div>
    );
}