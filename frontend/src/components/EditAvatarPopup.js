import React, { createRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatar = createRef();

  useEffect(() => {
    avatar.current.value = "";
  }, [avatar, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatar.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      containerType="popup__container_input_single"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__hidden-label" htmlFor="link-avatar">
        Ссылка на аватар
      </label>
      <input
        className="popup__input"
        id="link-avatar"
        name="popupInputLinkAvatar"
        type="url"
        required
        placeholder="Ссылка на аватар"
        ref={avatar}
      />
      <span id="link-avatar-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}
