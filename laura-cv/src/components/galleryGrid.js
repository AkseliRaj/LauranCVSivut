import React from "react";
import "../css/galleryGrid.css";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import { projects } from "../projects/projects";

export default function GalleryGrid() {
  return (
      <div className="row g-3 g-md-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="col-6 col-lg-4"
          >
            <Link to={`/gallery/${project.slug}`} className="gallery-tile">
              <LazyImage
                className="gallery-img"
                loadedClassName="gallery-img--loaded"
                src={project.thumbnail || project.images[0]}
                alt={project.title}
              />
              <div className="gallery-overlay" aria-hidden="true">
                <div className="gallery-overlay-inner">
                  <div className="gallery-title">{project.titleGrid || project.title}</div>
                  {project.subtitle && (
                    <div className="gallery-subtitle">{project.subtitle}</div>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
  );
}
