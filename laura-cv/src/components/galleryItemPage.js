import react from "react";
import "../css/galleryItemPage.css"
import backArrowIcon from "../assets/svg/backArrow.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import EmblaCarousel from "./emblacarousel/EmblaCarousel";
import "./emblacarousel/embla.css";

export default function GalleryItemPage() {
    const { t, i18n } = useTranslation();
    
    // Sample images for the carousel
    const sampleImages = [
        "https://picsum.photos/id/1011/800/600",
        "https://picsum.photos/id/1015/800/600",
        "https://picsum.photos/id/1018/800/600",
        "https://picsum.photos/id/1020/800/600",
        "https://picsum.photos/id/1022/800/600",
        "https://picsum.photos/id/1025/800/600"
    ];

    const originalPhotographer = ["Aatu Nurminen"];

    const carouselOptions = { dragFree: true, loop: false };

    return (
        <div className="galleryItemContainer container-fluid">

            {/* Header section */}
            <div className="row justify-content-center">
                <div className="headerSection col-11">
                    <Link to="/gallery">
                        <div className="row backButton pb-3 pb-md-4">
                            <div className="col-auto d-flex align-items-center">
                                <img
                                    src={backArrowIcon}
                                    alt="Back arrow Icon"
                                    className="backArrow-icon"
                                />
                            </div>
                            <div className="col d-flex align-items-center">
                                <h2 className="backButtonText">{t('back to gallery')}</h2>
                            </div>
                        </div>
                    </Link>
                    <h1 className="pb-1 pb-md-3">Maranasati</h1>
                    <p>2.4.2025 - 17.5.2025</p>
                </div>
            </div>

            {/* Image carousel */}
            <div className="row justify-content-center pb-4 pb-md-5">
                <div className="col-11">
                    <EmblaCarousel slides={sampleImages} options={carouselOptions} photographers={originalPhotographer} />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="descriptionSection col-11">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="creditsHeader col-11 pb-3 pb-md-4 pb-lg-5">
                    <h1>{t("credits")}</h1>
                </div>
                <div className="creditsSection col-11">
                    <ul>
                        <li><span>Konsepti:</span> Joel Härkönen, Kalle Nurminen, Veli-Ville Sivén</li>
                        <li><span>Ohjaus:</span> Joel Härkönen</li>
                        <li><span>Lavastus:</span> Kalle Nurminen</li>
                        <li><span>Musiikin sävellys ja sovitus:</span> Veli-Ville Sivén ja työhryhmä</li>
                        <li><span>Äänisuunnittelu:</span> Veli-Ville Sivén</li>
                        <li><span>Maskeeraus ja kampaussuunnittelu:</span> Veera Anttila</li>
                        <li><span>Valosuunnittelu:</span> Aarne Turunen</li>
                        <li><span>Sirkuskonsultit:</span> Jenni Lehtinen ja Sasu Peistola</li>
                    </ul>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="linksHeader col-11 pb-3 pb-md-5">
                    <h1>{t("usefulLinks")}</h1>
                </div>
                <div className="linksSection col-11">
                    <a className="link-opacity-80-hover" href="https://teatteri.ouka.fi/naytelma/post-kabaree/" target='_blank' rel="noopener noreferrer">https://teatteri.ouka.fi/naytelma/post-kabaree/</a>
                </div>
            </div>

        </div>
    )

}