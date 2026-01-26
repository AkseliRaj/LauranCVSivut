import React from 'react';
import '../css/about.css';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useLazyLoadImage } from '../hooks/useLazyLoadImage';
import Typewriter from 'typewriter-effect';

import profilePicture from '../assets/webp/profilePicture.webp';
import lampIcon from '../assets/svg/lamp.svg';
import locationIcon from '../assets/svg/location.svg';
import dinoSpeechIcon from '../assets/svg/dinoSpeech.svg';

export default function About() {
    const { t, i18n } = useTranslation();
    const { isLoaded, onLoad } = useLazyLoadImage();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'fi' : 'en';
        i18n.changeLanguage(newLang);
    };

    // Typewriter sentences with translations
    const typewriterStrings = [
        t('typewriter.interested'),
        t('typewriter.lookingFor'),
        t('typewriter.needSolutions'),
        t('typewriter.createTogether'),
        t('typewriter.illuminateProject')
    ];

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
                                className={`profilePicture img-fluid ${isLoaded ? 'profilePicture--loaded' : ''}`}
                                src={profilePicture}
                                alt="Profile picture"
                                loading="lazy"
                                onLoad={onLoad}
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
                                        <h2>{t('lighting designer')}</h2>
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
                                        <h2>{t('based in')} Helsinki, {t('finland')}</h2>
                                    </div>
                                </div>
                                <Link to="/contact">
                                    <button className="btn btn-primary mt-3">
                                        {t('contact me')}
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
                                    <h2>{t('lighting designer')}</h2>
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
                                    <h2>{t('based in')} Helsinki, <br /> {t('finland')}</h2>
                                </div>
                            </div>

                        </div>

                        {/* IMAGE */}
                        <div className="col-12 pt-5">
                            <img
                                className={`profilePicture img-fluid ${isLoaded ? 'profilePicture--loaded' : ''}`}
                                src={profilePicture}
                                alt="Profile picture"
                                loading="lazy"
                                onLoad={onLoad}
                            />
                        </div>

                    </div>
                </div>
            </div>



            {/* BIO SECTION */}
            <div className="row justify-content-center align-items-center bioSection">
                <div className="col-11">
                    <div className="bioBorder p-lg-5 p-4">
                        <div className="row align-items-center pb-lg-4 pb-md-2">
                            <div className="col-auto">
                                <h1 className="m-0">BIO</h1>
                            </div>
                            <div className="col d-flex align-items-center justify-content-end">
                                <div className="creaditsHeader align-items-center gap-4 d-none d-md-flex">
                                    <p className="typeWriterText m-0 text-end">
                                        <Typewriter
                                            key={i18n.language}
                                            options={{
                                                strings: typewriterStrings,
                                                autoStart: true,
                                                loop: true,
                                                delay: 50,
                                                deleteSpeed: 30,
                                            }}
                                        />
                                    </p>
                                    <img
                                        src={dinoSpeechIcon}
                                        alt="Dino icon"
                                        className="bio-dino-speech-icon d-none d-md-block m-0"
                                    />
                                </div>
                            </div>
                        </div>
                        <p>
                            {t('I am lighting designer')}
                        </p>
                        <p>
                            {t('My background')}
                        </p>
                        <p>
                            {t('I have foundational skills')}
                        </p>
                        <div className="pt-4 d-sm-none">
                            <Link to="/contact" >
                                <button className="btn btn-primary">
                                    {t('contact me')}
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
                        {t('check out all my works')}{' '}
                        <Link to="/gallery" className="galleryLink">
                            {t('here')}
                        </Link>
                    </h1>
                </div>
            </div>

        </div>
    );
}