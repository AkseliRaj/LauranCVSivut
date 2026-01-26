import React from "react";
import "../css/galleryItemPage.css";
import backArrowIcon from "../assets/svg/backArrow.svg";
import { Link, useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import EmblaCarousel from "./emblacarousel/EmblaCarousel";
import "./emblacarousel/embla.css";
import { getProjectBySlug } from "../projects/projects";

const carouselOptions = { dragFree: true, loop: false };

export default function GalleryItemPage() {
    const { t } = useTranslation();
    const { projectSlug } = useParams();
    const project = getProjectBySlug(projectSlug);

    if (!project) {
        return <Navigate to="/gallery" replace />;
    }

    return (
        <div className="galleryItemContainer container-fluid">

            {/* Header section */}
            <div className="row justify-content-center">
                <div className="headerSection col-11">
                    <Link to="/gallery">
                        <div className="row backButton pb-4 pb-md-5">
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
                    <h1 className="pb-1 pb-4 pb-md-5">{project.title}</h1>
                    {project.date && <p>{project.date}</p>}
                </div>
            </div>

            {/* Image carousel */}
            <div className="row justify-content-center pb-4 pb-md-5">
                <div className="col-11">
                    <EmblaCarousel
                        slides={project.images}
                        options={carouselOptions}
                        photographers={project.photographers}
                    />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="descriptionSection col-11">
                    {project.description.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>
            </div>

            {project.credits.length > 0 && (
                <div className="row justify-content-center">
                    <div className="creditsHeader col-11 pb-3 pb-md-4 pb-lg-5">
                        <h1>{t("credits")}</h1>
                    </div>
                    <div className="creditsSection col-11">
                        <ul>
                            {project.credits.map((c, i) => (
                                <li key={i}><span>{c.label}:</span> {c.names}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {project.links.length > 0 && (
                <div className="row justify-content-center">
                    <div className="linksHeader col-11 pb-3 pb-md-5">
                        <h1>{t("usefulLinks")}</h1>
                    </div>
                    <div className="linksSection col-11">
                        {project.links.map((link, i) => (
                            <a
                                key={i}
                                className="link-opacity-80-hover d-block mb-2"
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.label || link.url}
                            </a>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
}