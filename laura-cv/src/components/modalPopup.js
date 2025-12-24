import React from 'react';
import { Modal } from 'bootstrap';
import closeIcon from '../assets/svg/close.svg';
import '../css/modalPopup.css';

export default function ModalPopup({ id, title, children }) {
  const handleClose = () => {
    const modalEl = document.getElementById(id);
    if (!modalEl) return;
    const instance = Modal.getInstance(modalEl) || new Modal(modalEl);
    instance.hide();
  };

  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content bg-black text-white border border-white rounded-0">
          <div className="modal-header">
            <h2 className="modal-title" id={`${id}Label`}>{title}</h2>
            <button
              type="button"
              className="custom-close-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            >
              <img src={closeIcon} alt="Close" />
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
