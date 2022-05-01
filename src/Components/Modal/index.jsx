import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import "./index.scss";

const Modal = ({ children, trigger, header, title }) => {
  const [isOpen, setOpen] = useState(null);
  const innerRef = useRef();

  const closeModal = () => setOpen(null);

  useEffect(() => {
    console.log(innerRef.current);
  }, [innerRef]);

  return (
    <div>
      <div onClick={() => setOpen(true)}> {trigger}</div>
      {isOpen && (
        <div onClick={closeModal} id="kash-modal" class="kash-modal-container">
          <div onClick={(e) => e.stopPropagation()} class="kash-modal">
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
