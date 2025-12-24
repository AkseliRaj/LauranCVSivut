import React from 'react';
import { Link } from 'react-router-dom';
import emailIcon from '../assets/svg/email.svg';
import phoneIcon from '../assets/svg/phone.svg';
import { ContactForm } from './contactForm.js';
import ModalPopup from './modalPopup.js';
import cvFinnish from '../assets/pdf/CV_AkseliRajahalmeFinnish.pdf';
import cvEnglish from '../assets/pdf/CV_AkseliRajahalmeEnglish.pdf';
import '../css/contact.css';

export default function Contact() {
  return (
    <div className="contact-container container-fluid">
      <div className='row justify-content-center py-5'>
        <div className="col-11 pb-3">
          <h1 className="contactPageHeading"> Contact me! </h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-11 heroSection">
            <div className="row align-items-center">
              {/* LEFT: TEXT */}
              <div className="col-12 col-lg-7 d-flex py-2 py-lg-5">
                <div className="contactInformationTextWrapper">
                  {/* EMAIL */}
                  <div className="row pb-2 pb-lg-4 emailContact">
                    <div className="col-auto d-flex align-items-center">
                      <img src={emailIcon} alt="Email icon" className="email-icon" />
                    </div>
                    <div className="col d-flex align-items-center">
                      <p>laura.em.walden@gmail.com</p>
                    </div>
                  </div>
                  {/* PHONE NUMBER */}
                  <div className="row pb-5 phoneNumber">
                    <div className="col-auto d-flex align-items-center">
                      <img src={phoneIcon} alt="Phone icon" className="phone-icon" />
                    </div>
                    <div className="col d-flex align-items-center">
                      <p>+358 045-272 0123</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* RIGHT: CV POP-UP BUTTON */}
              <div className="col-5 d-flex justify-content-center d-none d-lg-flex">
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#cvDownloadModal"
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="contactForm col-11">
          <ContactForm />
        </div>
      </div>
      {/* CV DOWNLOAD MODAL */}
      <ModalPopup id="cvDownloadModal" title="Pick your poison!">
        <div className="d-flex flex-column gap-3">
          <a
            href={cvFinnish}
            className="btn btn-outline-primary"
            download
          >
            Download CV (Finnish)
          </a>
          <a
            href={cvEnglish}
            className="btn btn-outline-primary"
            download
          >
            Download CV (English)
          </a>
        </div>
      </ModalPopup>
    </div>
  );
}