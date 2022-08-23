import React from 'react';
import Popup from "./Popup";

export default function ImagePopup(props) {
  return (
    <Popup isOpen={props.isOpen} name={props.name} onClose={props.onClose} containerType={props.containerType}>
      {/* <div className={`popup ${props.card.link && 'popup_opened'}`} id="popup-image"> */}
      {/* <div className={`popup__container ${props.containerType}`}> */}
        <figure className="popup__figure">
          <button
            className="popup__form-closer popup__form-closer_img"
            id="image-closer"
            type="button"
            aria-label="Закрыть изображение"
            onClick={props.onClose}
          ></button>
          <img className="popup__figure-img" src={props.card.link} alt={props.card.name} />
          <figcaption className="popup__figure-caption">{props.card.name}</figcaption>
        </figure>
      {/* </div> */}
      {/* </div> */}
    </Popup>
  )
}