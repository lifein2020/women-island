import React from 'react';
import "./image_popup.scss";

export default function ImagePopup({imageSrc, onClose}) {

    return (
        <div className={(imageSrc) ? "popup popup-type-image popup-is-opened" : "popup popup-type-image"}>
            <div className="popup-container-image">
                <button type="button" className="popup-close"  onClick={onClose}></button>
                <img src={imageSrc} alt="" className="popup-image"/>
            </div>
        </div>
    )
}

