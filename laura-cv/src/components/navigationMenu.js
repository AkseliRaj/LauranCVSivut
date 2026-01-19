import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
    const location = useLocation();
    const [shakePath, setShakePath] = useState(null);

    const isCurrentRoute = (path) => location.pathname === path;

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

    const triggerShake = (path) => {
        // restart animation even on repeated clicks
        setShakePath(null);
        requestAnimationFrame(() => setShakePath(path));
    };

    useEffect(() => {
        if (!shakePath) return;
        const id = window.setTimeout(() => setShakePath(null), 500);
        return () => window.clearTimeout(id);
    }, [shakePath]);

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
                    className="btn language-toggle"
                    onClick={toggleLanguage}
                >
                    {i18n.language === 'en' ? 'FI' : 'EN'}
                </button>
                </div>
            </div>


            <div className={`menuContainer ${isMenuOpen ? 'menuOpen' : 'menuClosed'}`}>

                <div className="menuBackgroundAnimation">
                    <MenuBackgroundAnimation />
                </div>

                {/*NAVIGATION LINKS*/}
                <Link
                    to="/about"
                    className={`
                                menuLink
                                d-flex
                                align-items-center
                                justify-content-between
                                text-decoration-none
                                ${isCurrentRoute("/about") ? "menuLinkDisabled" : ""}
                            `}
                    onClick={(e) => {
                        if (isCurrentRoute("/about")) {
                            e.preventDefault(); // safety net
                            triggerShake("/about")
                            return;
                        }

                        window.isMenuNavigation = true;
                        setIsMenuOpen(false);
                    }}
                >
                    <h1 className={`ps-4 ps-md-5 ${shakePath === "/about" ? "shake" : ""}`}>
                        {t("about")}
                    </h1>


                    {isCurrentRoute("/about") ? (
                        <p className={`siteLocationText pe-5 ${shakePath === "/about" ? "shake" : ""}`}>
                            {t("currently here")}
                        </p>
                    ) : (
                        <img
                            className="pe-5 d-none d-md-block"
                            src={arrowLeftIcon}
                            alt="arrow left"
                        />
                    )}
                </Link>

                <Link
                    to="/gallery"
                    className={`menuLink d-flex align-items-center justify-content-between text-decoration-none ${isCurrentRoute("/gallery") ? "menuLinkDisabled" : ""}`}
                    onClick={(e) => {
                        if (isCurrentRoute("/gallery")) {
                            e.preventDefault();
                            triggerShake("/gallery");
                            return;
                        }
                        window.isMenuNavigation = true;
                        setIsMenuOpen(false);
                    }}
                >
                    <h1 className={`ps-4 ps-md-5 ${shakePath === "/gallery" ? "shake" : ""}`}>
                        {t("gallery")}
                    </h1>

                    {isCurrentRoute("/gallery") ? (
                        <p className={`siteLocationText pe-5 ${shakePath === "/gallery" ? "shake" : ""}`}>
                            {t("currently here")}
                        </p>
                    ) : (
                        <img className="pe-5 d-none d-md-block" src={arrowLeftIcon} alt="arrow left" />
                    )}
                </Link>

                <Link
                    to="/contact"
                    aria-current={isCurrentRoute("/contact") ? "page" : undefined}
                    className={`
                                menuLink
                                d-flex
                                align-items-center
                                justify-content-between
                                text-decoration-none
                                ${isCurrentRoute("/contact") ? "menuLinkDisabled" : ""}
                            `}
                    onClick={(e) => {
                        if (isCurrentRoute("/contact")) {
                            e.preventDefault();
                            triggerShake("/contact");
                            return;
                        }
                        window.isMenuNavigation = true;
                        setIsMenuOpen(false);
                    }}
                >
                    <h1 className={`ps-4 ps-md-5 ${shakePath === "/contact" ? "shake" : ""}`}>
                        {t("contact")}
                    </h1>

                    {isCurrentRoute("/contact") ? (
                        <p className={`siteLocationText pe-5 ${shakePath === "/contact" ? "shake" : ""}`}>
                            {t("currently here")}
                        </p>
                    ) : (
                        <img
                            className="pe-5 d-none d-md-block"
                            src={arrowLeftIcon}
                            alt="arrow left"
                        />
                    )}
                </Link>

            </div>
        </div>
    );
}