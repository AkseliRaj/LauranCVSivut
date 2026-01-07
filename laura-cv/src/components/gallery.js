import React from 'react';
import { useTranslation } from "react-i18next";
import '../css/gallery.css';
import GalleryGrid from './galleryGrid.js';

export default function Gallery() {
    const { t } = useTranslation();
    return (
        <div className="gallery-container container-fluid">
            <div className='row justify-content-center'>
                <div className='col-11'>

                    {/* HEADER */}
                    <div className='row'>
                        <div className='col galleryHeader'>
                            <h1 className='pb-4 pb-md-5'>{t('gallery')}</h1>
                            <p>
                                {t('gallery description 1')}
                            </p>
                            <p>
                                {t('gallery description 2')}
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