import React, { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
        name,
        about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      containerType="popup__container_input_double"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__hidden-label" htmlFor="name-profile">
        Ваше имя
      </label>
      <input
        value={name}
        className="popup__input"
        id="name-profile"
        name="popupInputName"
        type="text"
        required
        maxLength="40"
        minLength="2"
        placeholder="Введите ваше имя"
        onChange={handleChangeName}
      />
      <span id="name-profile-error" className="popup__input-error"></span>
      <label className="popup__hidden-label" htmlFor="description-profile">
        О себе
      </label>
      <input
        value={description}
        className="popup__input"
        id="description-profile"
        name="popupInputDescription"
        type="text"
        required
        maxLength="200"
        minLength="2"
        placeholder="Расскажите о себе"
        onChange={handleChangeDescription}
      />
      <span
        id="description-profile-error"
        className="popup__input-error"
      ></span>
    </PopupWithForm>
  );
}
