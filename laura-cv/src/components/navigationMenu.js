import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/navigationMenu.css";
import MenuBackgroundAnimation from "./menuBackgroundAnimation";

import arrowLeftIcon from "../assets/svg/arrowLeft.svg";
import closeIcon from "../assets/svg/close.svg";
import letter from "../assets/svg/letter.svg";
import speechBubble from "../assets/svg/speechBubble.svg";
import menuIcon from "../assets/svg/menu.svg";

export default function NavigationMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                {/*
                    <div className="d-flex align-items-center ms-auto">
                    <div className="localicationLink px-3">
                        <Link to="/contact" className="d-flex align-items-center pl-5">
                            <img src={speechBubble} alt="speech bubble icon"/>
                            <p className="ps-3">In Finnish</p>
                        </Link>
                    </div>
                    <div/>
                    <div className="contactLink px-4">
                        <Link to="/contact" className="d-flex align-items-center pl-5">
                            <img src={letter} alt="letter icon"/>
                            <p className="ps-3">Contact</p>
                        </Link>
                    </div>
                </div>
                */}

            </div>
            <div className={`menuContainer ${isMenuOpen ? 'menuOpen' : 'menuClosed'}`}>
                <div className="menuBackgroundAnimation">
                    <MenuBackgroundAnimation />
                </div>
                <Link
                    to="/about"
                    className="menuLink d-flex align-items-center justify-content-between text-decoration-none"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <h1 className="ps-4 ps-md-5">About</h1>
                    <img className="pe-5 d-none d-md-block" src={arrowLeftIcon} alt="arrow left" />
                </Link>
                <Link
                    to="/gallery"
                    className="menuLink d-flex align-items-center justify-content-between text-decoration-none"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <h1 className="ps-4 ps-md-5">Gallery</h1>
                    <img className="pe-5 d-none d-md-block" src={arrowLeftIcon} alt="arrow left" />
                </Link>
                <Link
                    to="/contact"
                    className="menuLink d-flex align-items-center justify-content-between text-decoration-none"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <h1 className="ps-4 ps-md-5">Contact</h1>
                    <img className="pe-5 d-none d-md-block" src={arrowLeftIcon} alt="arrow left" />
                </Link>
            </div>
        </div>
    );
}