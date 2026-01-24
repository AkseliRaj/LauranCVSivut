import React from "react";
import "../css/galleryGrid.css";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";

const items = [
  {
    id: 1,
    src: "https://picsum.photos/id/1025/800/800",
    title: "DOMICILE",
    subtitle: "A short caption here",
  },
  {
    id: 2,
    src: "https://picsum.photos/id/1011/800/800",
    title: "MARANASATI",
    subtitle: "— our ink continues...",
  },
  {
    id: 3,
    src: "https://picsum.photos/id/1005/800/800",
    title: "ARCHIVE",
    subtitle: "Fog / memory / street",
  },
  {
    id: 4,
    src: "https://picsum.photos/id/1035/800/800",
    title: "STILL LIFE",
    subtitle: "Red glove study",
  },
  {
    id: 5,
    src: "https://picsum.photos/id/1027/800/800",
    title: "GESTURE",
    subtitle: "Hands in light",
  },
];

export default function GalleryGrid() {
  return (

      <div className="row g-3 g-md-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="col-6 col-lg-4"
          >
            <Link to="/GalleryItemPage" className="gallery-tile">
              <LazyImage
                className="gallery-img"
                loadedClassName="gallery-img--loaded"
                src={item.src}
                alt={item.title}
              />
              <div className="gallery-overlay" aria-hidden="true">
                <div className="gallery-overlay-inner">
                  <div className="gallery-title">{item.title}</div>
                  {item.subtitle && (
                    <div className="gallery-subtitle">{item.subtitle}</div>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
  );
}
