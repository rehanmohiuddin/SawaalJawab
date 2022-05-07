import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import "./index.scss";

const Modal = ({ children, trigger, header }) => {
  const [isOpen, setOpen] = useState(null);

  const closeModal = () => setOpen(null);

  return (
    <div>
      <div onClick={() => setOpen(true)}> {trigger}</div>
      {isOpen && (
        <div
          onClick={closeModal}
          id="kash-modal"
          className="kash-modal-container"
        >
          <div onClick={(e) => e.stopPropagation()} className="kash-modal">
            <div className="modal-header">
              <div className="modal-header-title ">{header}</div>
              <FontAwesomeIcon onClick={closeModal} icon={faClose} size="2x" />
            </div>

            <div className="modal-container"> {children} </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
