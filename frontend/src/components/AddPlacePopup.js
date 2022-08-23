import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleChangePlace(e) {
    setName(e.target.value);
  }

  function handleChangeLinkForPlace(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }

  useEffect(() => {
    if(isOpen) {
    setName("");
    setLink("");
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      buttonText="Создать"
      containerType="popup__container_input_noinputs"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__hidden-label" htmlFor="name-card">
        Название
      </label>
      <input
        className="popup__input"
        id="name-card"
        name="popupInputCard"
        type="text"
        required
        maxLength="30"
        minLength="2"
        placeholder="Название"
        value={name}
        onChange={handleChangePlace}
      />
      <span id="name-card-error" className="popup__input-error"></span>
      <label className="popup__hidden-label" htmlFor="link-card">
        Ссылка на картинку
      </label>
      <input
        className="popup__input"
        id="link-card"
        name="popupInputLink"
        type="url"
        required
        placeholder="Ссылка на картинку"
        value={link}
        onChange={handleChangeLinkForPlace}
      />
      <span id="link-card-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}
