import React from 'react';
import { Modal } from 'bootstrap';
import { useTranslation } from "react-i18next";
import closeIcon from '../assets/svg/close.svg';
import '../css/modalPopup.css';

export default function ModalPopup({ id, title, children }) {
  const { t } = useTranslation();
  
  const handleClose = () => {
    const modalEl = document.getElementById(id);
    if (!modalEl) return;
    const instance = Modal.getInstance(modalEl) || new Modal(modalEl);
    instance.hide();
  };

  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-black text-white rounded-0">
          <div className="modal-header p-3 p-sm-5 d-flex justify-content-between align-items-center">
            <h2 className="modal-title" id={`${id}Label`}>{title}</h2>
            <button
              type="button"
              className="custom-close-btn"
              data-bs-dismiss="modal"
              aria-label={t('close')}
              onClick={handleClose}
            >
              <img src={closeIcon} alt={t('close')} />
            </button>
          </div>
          <div className="modal-body p-3 p-sm-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
