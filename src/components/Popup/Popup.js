import React from 'react';
import './Popup.css';

function Popup({ popupText, isVisible, onClose }) {


    return (
        <div className={`popup ${isVisible && 'popup__visibility'}`}>
            <p className="popup__text">{popupText}</p>
            <button className="popup__close" onClick={onClose}>&times;</button>
        </div>
    )
}

export default Popup;