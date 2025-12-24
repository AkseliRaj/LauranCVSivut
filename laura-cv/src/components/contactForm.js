import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/contactForm.css';


export const ContactForm = () => {
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
          <label className="form-label pb-1 pb-lg-3">Name / Company:</label>
          <input
            type="text"
            name="user_name"
            className="form-control p-md-2 p-lg-3"
          />
        </div>

        <div className="col-md-6 pb-4 pb-lg-3 pb-xl-4">
          <label className="form-label pb-1 pb-lg-3">Email:</label>
          <input
            type="email"
            name="user_email"
            className="form-control p-md-2 p-lg-3"
          />
        </div>
      </div>

      {/* MESSAGE */}
      <div className="pb-2 pb-md-5">
        <label className="form-label pb-1 pb-lg-3">Message:</label>
        <textarea
          name="message"
          rows="5"
          className="form-control p-md-2 p-lg-3"
          placeholder='Write your message here'
        />
      </div>

      {/* SUBMIT */}
      <button type="submit" className="btn btn-primary mt-5">
        Send message
      </button>

    </form>
  );
};
