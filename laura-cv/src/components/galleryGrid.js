import React, { useMemo } from "react";
import "../css/galleryGrid.css";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";
import { projects } from "../projects/projects";

// Parse Finnish date format (DD.MM.YYYY) to Date object
function parseDate(dateString) {
  const [day, month, year] = dateString.split('.').map(Number);
  return new Date(year, month - 1, day); // month is 0-indexed in Date
}

function getLatestDate(project) {
  const dateStr = project.date;
  if (dateStr.includes(' - ')) {
    const endDate = dateStr.split(' - ')[1].trim();
    return parseDate(endDate);
  }
  return parseDate(dateStr);
}

// Memoized gallery item component to prevent unnecessary re-renders
const GalleryItem = React.memo(({ project }) => {
  const thumbnail = Array.isArray(project.thumbnail) 
    ? project.thumbnail[0] 
    : project.thumbnail || project.images[0];
  
  return (
    <div className="col-6 col-lg-4">
      <Link to={`/gallery/${project.slug}`} className="gallery-tile">
        <LazyImage
          className="gallery-img"
          loadedClassName="gallery-img--loaded"
          src={thumbnail}
          alt={project.title}
        />
        <div className="gallery-overlay" aria-hidden="true">
          <div className="gallery-overlay-inner">
            <div className="gallery-title">{project.titleGrid || project.title}</div>
          </div>
        </div>
      </Link>
    </div>
  );
});

GalleryItem.displayName = 'GalleryItem';

function GalleryGrid() {
  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const dateA = getLatestDate(a);
      const dateB = getLatestDate(b);
      return dateB - dateA; // Descending order (newest first)
    });
  }, []); // Empty dependency array since projects is imported constant

  return (
      <div className="row g-3 g-md-4">
        {sortedProjects.map((project) => (
          <GalleryItem key={project.id} project={project} />
        ))}
      </div>
  );
}

export default React.memo(GalleryGrid);
