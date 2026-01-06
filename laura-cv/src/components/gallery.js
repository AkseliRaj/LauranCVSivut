import React from 'react';
import '../css/gallery.css';
import GalleryGrid from './galleryGrid.js';

export default function Gallery() {
    return (
        <div className="gallery-container container-fluid">
            <div className='row justify-content-center'>
                <div className='col-11'>

                    {/* HEADER */}
                    <div className='row'>
                        <div className='col galleryHeader'>
                            <h1 className='pb-4 pb-md-5'>Gallery</h1>
                            <p>
                                For the last few years I've worked as a lighting designer and a technician
                                in a variety of projects, ranging from theater acts to public and private events.
                            </p>
                            <p>
                                Down below is a collection of different
                                projects I was a part of, please enjoy!
                            </p>
                        </div>
                    </div>

                    {/* GALLERY ITEMS */}
                    <div className='row'>
                        <div className='col galleryItem'>
                            <h1 className='pb-4 pb-md-5'>2025</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <GalleryGrid />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}   