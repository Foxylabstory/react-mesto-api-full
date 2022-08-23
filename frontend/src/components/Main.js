import React, { useContext } from 'react';
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main({
  cards,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section
        className="profile"
        aria-label="секция описывающая профиль"
        id="userId"
      >
        <button
          className="profile__avatar"
          id="profileAvatar"
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        />
        <div className="profile__info">
          <div className="profile__name-block">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              id="profile-edit-button"
              type="button"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          id="profile-add-button"
          type="button"
          onClick={onAddPlace}
        />
      </section>

      <section className="elements" aria-label="секция описывающая места">
        {cards.map((card) => (
          <Card
            src={card.link}
            name={card.name}
            key={card._id}
            likes={card.likes}
            owner={card.owner}
            cardId={card._id}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}
