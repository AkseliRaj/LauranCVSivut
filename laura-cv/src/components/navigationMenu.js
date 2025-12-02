import { useState } from "react";
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
                    <img className="p-2" src={speechBubble} alt="speech bubble icon"/>
                    <p>In Finnish</p>
                    <img className="p-2" src={letter} alt="letter icon"/>
                    <p>Contact</p>
                </div>
            </div>
            {isMenuOpen && (
                <>
                    <div className="menuBackgroundAnimation">
                        <MenuBackgroundAnimation />
                    </div>
                    <Link to="/about" className="menuLink d-flex align-items-center justify-content-between text-decoration-none">
                        <h1 className="ps-5">About</h1>
                        <img className="pe-5" src={arrowLeftIcon} alt="arrow left" />
                    </Link>
                    <Link to="/gallery" className="menuLink d-flex align-items-center justify-content-between text-decoration-none">
                        <h1 className="ps-5">Gallery</h1>
                        <img className="pe-5" src={arrowLeftIcon} alt="arrow left" />
                    </Link>
                    <Link to="/contact" className="menuLink d-flex align-items-center justify-content-between text-decoration-none">
                        <h1 className="ps-5">Contact</h1>
                        <img className="pe-5" src={arrowLeftIcon} alt="arrow left" />
                    </Link>
                </>
            )}
        </div>
    );
}