import React, { useRef } from 'react';
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';
import '../css/contactForm.css';


export const ContactForm = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      { publicKey: 'YOUR_PUBLIC_KEY' }
    ).then(
      () => console.log('SUCCESS!'),
      (error) => console.log('FAILED...', error.text)
    );
  };

  return (
    <form className='p-2 py-4 p-md-4 py-md-5 p-lg-5' ref={form} onSubmit={sendEmail}>
      
      {/* ROW */}
      <div className="row pb-3 pb-md-4 pb-xl-5 gx-lg-5 gx-xl-6">
        <div className="col-md-6 pb-4 pb-lg-3 pb-xl-4">
          <label className="form-label pb-1 pb-lg-3">{t('name company')}</label>
          <input
            type="text"
            name="user_name"
            className="form-control p-md-2 p-lg-3 p-xl-4"
          />
        </div>

        <div className="col-md-6 pb-4 pb-lg-3 pb-xl-4">
          <label className="form-label pb-1 pb-lg-3">{t('email')}</label>
          <input
            type="email"
            name="user_email"
            className="form-control p-md-2 p-lg-3 p-xl-4"
          />
        </div>
      </div>

      {/* MESSAGE */}
      <div className="pb-2 pb-md-5">
        <label className="form-label pb-1 pb-lg-3">{t('message')}</label>
        <textarea
          name="message"
          rows="5"
          className="form-control p-md-2 p-lg-3 p-xl-4"
          placeholder={t('message placeholder')}
        />
      </div>

      {/* SUBMIT */}
      <button type="submit" className="btn btn-primary mt-5">
        {t('send message')}
      </button>

    </form>
  );
};
