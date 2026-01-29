import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import '../css/gallery.css';
import GalleryGrid from './galleryGrid.js';
import dinoSpeechIcon from '../assets/svg/dinoSpeech.svg';

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
                    <div className='row galleryItemRow'>
                        <div className='col'>
                            <GalleryGrid />
                        </div>
                    </div>

                    <div className="creaditsHeader row g-4">
                        <div className="col-md-2 d-none d-md-block">
                            <img
                                src={dinoSpeechIcon}
                                alt="Dino icon"
                                className="dino-speech-icon"
                            />
                        </div>

                        <div className="col-12 col-md-10 d-none d-md-flex align-items-center">
                            <h1 className="galleryContactLinkHeader m-0">
                                {t('Intrested?')}{' '}
                                <Link to="/contact" className="galleryContactLink">
                                    {t('here')}
                                </Link>
                            </h1>
                        </div>
                    </div>

                    <div className="row d-flex d-md-none pt-4 pt-md-5">
                        <div className="col-12">
                            <h1 className="galleryContactLinkHeaderPhone pb-4 pb-md-5">
                                {t('IntrestedSmallScreenHeader')}
                            </h1>
                        </div>
                        <div className="col-12">
                            <p>{t('IntrestedSmallScreenText')}
                                <Link to="/contact" className='contactPageLink'>
                                    {t('here')}
                                </Link>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}   