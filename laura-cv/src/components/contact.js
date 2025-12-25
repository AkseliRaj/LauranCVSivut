import React, { useEffect, useState } from 'react';

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

      {/* PAGE CONTENT WRAPPER */}
      <div className="row justify-content-center">
        <div className="col-11">

          {/* HEADER */}
          <div className="row pb-3">
            <div className="col">
              <h1 className="contactPageHeading">Contact me!</h1>
            </div>
          </div>

          {/* HERO SECTION */}
          <div className="row justify-content-center">
            <div className="col-12 contactHeroseroSection">

              <div className="row align-items-center">

                {/* CONTACT DETAILS */}
                <div className="col-12 col-sm-7 pt-2 pt-md-4 pt-lg-5">
                  <div className="contactInformationTextWrapper">

                    {/* EMAIL */}
                    <div className="row pb-2 pb-lg-4 emailContact">
                      <div className="col-auto d-flex align-items-center">
                        <img
                          src={emailIcon}
                          alt="Email icon"
                          className="email-icon"
                        />
                      </div>
                      <div className="col d-flex align-items-center">
                        <p>laura.em.walden@gmail.com</p>
                      </div>
                    </div>

                    {/* PHONE */}
                    <div className="row pb-4 pb-sm-0 phoneNumber">
                      <div className="col-auto d-flex align-items-center">
                        <img
                          src={phoneIcon}
                          alt="Phone icon"
                          className="phone-icon"
                        />
                      </div>
                      <div className="col d-flex align-items-center">
                        <p>+358 045-272 0123</p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* DOWNLOAD CV BUTTON */}
                <div className="col-12 col-sm-5 d-flex justify-content-md-center justify-content-start align-items-center">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#cvDownloadModal"
                  >
                    Download CV
                  </button>
                </div>

              </div>
            </div>
          </div>


          {/* CONTACT FORM */}
          <div className="row justify-content-center">
            <div className="col-12 contactForm">
              <ContactForm />
            </div>
          </div>

        </div>
      </div>

      {/* CV DOWNLOAD MODAL */}
      <ModalPopup id="cvDownloadModal" title="Pick your poison!">
        <div className="d-flex flex-column gap-4">
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
