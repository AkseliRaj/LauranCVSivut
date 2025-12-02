import "../css/navigationMenu.css";
import MenuBackgroundAnimation from "./menuBackgroundAnimation";

import arrowLeftIcon from "../assets/svg/arrowLeft.svg";
import closeIcon from "../assets/svg/close.svg";
import letter from "../assets/svg/letter.svg";
import speechBubble from "../assets/svg/speechBubble.svg";

export default function NavigationMenu() {
    return (
        <div>
            <div className="navBarTop d-flex align-items-center">
                <img className="p-2" src={closeIcon} alt="close menu" />
                <div className="d-flex align-items-center ms-auto">
                    
                    <img className="p-2" src={speechBubble} alt="speech bubble icon"/>
                    <p>In Finnish</p>
                    <img className="p-2" src={letter} alt="letter icon"/>
                    <p>Contact</p>
                </div>
            </div>
            <div className="menuBackgroundAnimation">
                <MenuBackgroundAnimation />
            </div>
            <div className="menuLink d-flex align-items-center justify-content-between">
                 
                <h1 className="ps-5">About</h1>
                <img className="pe-5" src={arrowLeftIcon} alt="arrow left" />
            </div>
            <div className="menuLink d-flex align-items-center justify-content-between">
                <h1 className="ps-5">Gallery</h1>
                <img className="pe-5" src={arrowLeftIcon} alt="arrow left" />
            </div>
            <div className="menuLink d-flex align-items-center justify-content-between">
                <h1 className="ps-5">Contact</h1>
                <img className="pe-5" src={arrowLeftIcon} alt="arrow left" />
            </div>
        </div>

    );
}