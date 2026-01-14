import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../css/navigationMenu.css";
import MenuBackgroundAnimation from "./menuBackgroundAnimation";

import arrowLeftIcon from "../assets/svg/arrowLeft.svg";
import closeIcon from "../assets/svg/close.svg";
import letter from "../assets/svg/letter.svg";
import speechBubble from "../assets/svg/speechBubble.svg";
import menuIcon from "../assets/svg/menu.svg";

export default function NavigationMenu() {
    
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'fi' : 'en';
        i18n.changeLanguage(newLang);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }

        // Cleanup function to restore scrolling when component unmounts
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        
        <div>
            <div className="navBarTop d-flex align-items-center">
                {isMenuOpen ? (
                    <img
                        className="p-2 menu-toggle-icon"
                        src={closeIcon}
                        alt="close menu"
                        onClick={toggleMenu}
                    />
                ) : (
                    <img
                        className="p-2 menu-toggle-icon"
                        src={menuIcon}
                        alt="open menu"
                        onClick={toggleMenu}
                    />
                )}
                <div className="d-flex align-items-center ms-auto">
                    <button
                        className="btn btn-sm btn-outline-secondary me-3"
                        onClick={toggleLanguage}
                        style={{ fontSize: '0.875rem' }}
                    >
                        {i18n.language === 'en' ? 'FI' : 'EN'}
                    </button>
                </div>
            </div>


            <div className={`menuContainer ${isMenuOpen ? 'menuOpen' : 'menuClosed'}`}>
                <div className="menuBackgroundAnimation">
                    <MenuBackgroundAnimation />
                </div>
                <Link
                    to="/about"
                    className="menuLink d-flex align-items-center justify-content-between text-decoration-none"
                    onClick={() => {
                        window.skipPageTransition = true;
                        setIsMenuOpen(false);
                    }}
                >
                    <h1 className="ps-4 ps-md-5">{t('about')}</h1>
                    <img className="pe-5 d-none d-md-block" src={arrowLeftIcon} alt="arrow left" />
                </Link>
                <Link
                    to="/gallery"
                    className="menuLink d-flex align-items-center justify-content-between text-decoration-none"
                    onClick={() => {
                        window.skipPageTransition = true;
                        setIsMenuOpen(false);
                    }}
                >
                    <h1 className="ps-4 ps-md-5">{t('gallery')}</h1>
                    <img className="pe-5 d-none d-md-block" src={arrowLeftIcon} alt="arrow left" />
                </Link>
                <Link
                    to="/contact"
                    className="menuLink d-flex align-items-center justify-content-between text-decoration-none"
                    onClick={() => {
                        window.skipPageTransition = true;
                        setIsMenuOpen(false);
                    }}
                >
                    <h1 className="ps-4 ps-md-5">{t('contact')}</h1>
                    <img className="pe-5 d-none d-md-block" src={arrowLeftIcon} alt="arrow left" />
                </Link>
            </div>
        </div>
    );
}