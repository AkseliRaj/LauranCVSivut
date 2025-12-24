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
    <form className='p-2 py-md-4 py-lg-5' ref={form} onSubmit={sendEmail}>
      
      {/* ROW */}
      <div className="row pb-5">
        <div className="col-md-6 pb-5 pb-md-0">
          <label className="form-label p-1 p-lg-3">Name / Company:</label>
          <input
            type="text"
            name="user_name"
            className="form-control p-1 p-lg-3"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label p-1 p-lg-3">Email:</label>
          <input
            type="email"
            name="user_email"
            className="form-control p-1 p-lg-3"
          />
        </div>
      </div>

      {/* MESSAGE */}
      <div className="pb-5">
        <label className="form-label pb-3">Message:</label>
        <textarea
          name="message"
          rows="5"
          className="form-control p-1 p-lg-3"
          placeholder='Write your message here'
        />
      </div>

      {/* SUBMIT */}
      <button type="submit" className="btn btn-primary">
        Send message
      </button>

    </form>
  );
};
