import React from 'react';
import Popup from "./Popup";

export default function PopupWithForm(props) {

  return (
    <Popup isOpen={props.isOpen} name={props.name} onClose={props.onClose}>
      {/* <div
      className={`popup popup_type_${props.name} ${props.isOpen && "popup_opened"}`}
      id={props.name}
    > */}
      {/* <div className={`popup__container ${props.containerType}`}> */}
        <h2 className="popup__header">{props.title}</h2>
        <form
          className="popup__form"
          id={`form-${props.name}`}
          name={props.name}
          autoComplete="on"
          onSubmit={props.onSubmit}
        >
          <fieldset className="popup__fieldset">
            {props.children}
            <button className="popup__button" type="submit">
              {props.buttonText}
            </button>
          </fieldset>
        </form>
        <button
          className={`popup__form-closer popup__form-closer_${props.name}`}
          id={`${props.name}-closer`}
          type="button"
          aria-label="Закрыть форму"
          onClick={props.onClose}
        />
      {/* </div> */}
      {/* </div> */}
    </Popup>
  );
}
