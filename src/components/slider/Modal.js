import React from "react";
import './Modal.css';

function Modal({ image, caption, onClose }) {
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="image-container">
                    <img src={image} alt={caption} />
                </div>
                <p>{caption}</p>
            </div>
        </div>
    );
}

export default Modal;
