//import logo from './logo.svg';
import React from "react";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";

import { api } from "../utils/Api";

import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Login from "./Login";
import Register from "./Register";
import InfoTooltip from "./InfoTooltip";
import { authorization, register, userCheck, deauthorization } from "../utils/auth";

export default function App() {
  const navigate = useNavigate();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });
  const [currentUser, setCurrentUser] = useState({
    name: "Загрузка",
    about: "информации",
    avatar: " ",
    _id: " ",
  });
  const [cards, setCards] = useState([]);
  const [registrated, setRegistrated] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("email@mail.com");
  const [authorizationData, setAuthorizationData] = useState({
    password: "",
    email: "",
  });
  /* const isModalWindowOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard.link || isInfoTooltipOpen;
  useEffect(() => {
    function closeByEscape(evt) {
      if(evt.key === 'Escape') {
        closeAllPopup();
      }
    }
    
    if(isModalWindowOpen) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isModalWindowOpen]) */

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setAuthorizationData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const updateUser = () => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateCards = () => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    tokenCheck();
    updateUser();
    updateCards();
  }, []);

  const tokenCheck = () => { // проверяk токен, сейчас придумать, как он должен проверять залогиненое состояние
    // const jwt = localStorage.getItem("jwt");
    userCheck(/* jwt */).then((response) => {
      setUserEmail(response.email);
      setLoggedIn(true);
    }).then(() => navigate("/"))
      .catch((err) => console.error(err));
  }



  const handleRegister = () => {
    setRegistrated(false);
    const { password, email } = authorizationData;
    register(password, email)
      .then((response) => {
        if (response.email) {
          setRegistrated(true);
          navigate("/sign-in");
        }
      })
      .then(() => {
        setAuthorizationData({ password: "", email: "" });
      })
      .catch((err) => {
        console.error(err);
      }).finally(() => setIsInfoTooltipOpen(true));
  };

  const handleLogin = () => {
    const { password, email } = authorizationData;
    authorization(password, email)
      .then((response) => {
        if (response.message === 'allowed') { //response.token убрали, нужно проверить что там приходит в ответе при логине
          updateUser();
          updateCards();
          setUserEmail(email);
          setLoggedIn(true);
          navigate("/");
        }
      })
      .then(() => {
        setAuthorizationData({ password: "", email: "" });
      })
      .catch((err) => console.error(err));
  };

  const logOut = () => { // не забыть подключить к роуту signout
    //localStorage.removeItem("jwt");
    const { email } = userEmail;
    deauthorization(email).then((resp) => {
      if (resp) {
        console.log(resp);
        setLoggedIn(false);
        navigate('/sign-in');
      }
    }).catch((err) => console.error(err));

  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleCardClick = (card) => {
    setSelectedCard({ name: card.name, link: card.link });
  };

  const closeAllPopup = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: "", link: "" });
    setIsInfoTooltipOpen(false);
  };

  const handleUpdateUser = (user) => {
    api
      .setUserInfoToApi(user)
      .then((data) => {
        setCurrentUser(data);
      })
      .then(() => closeAllPopup())
      .catch((error) => console.log(error));
  };

  const handleUpdateAvatar = (link) => {
    api
      .setUserPicToApi(link)
      .then((data) => {
        setCurrentUser(data);
      })
      .then(() => closeAllPopup())
      .catch((error) => console.log(error));
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i === currentUser._id);
    if (isLiked) {
      api
        .deleteLike(card.cardId)
        .then((data) => {
          setCards((state) =>
            state.map((c) => (c._id === card.cardId ? data : c))
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      api
        .putLike(card.cardId)
        .then((data) => {
          setCards((state) =>
            state.map((item) => (item._id === card.cardId ? data : item))
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleCardDelete = (card) => {
    api
      .deleteCard(card.cardId)
      .then(() => {
        setCards((state) => state.filter((item) => item._id !== card.cardId)); // item._id !== card.cardId
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddPlaceSubmit = (card) => {
    api
      .setNewCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .then(() => closeAllPopup())
      .catch((error) => console.log(error));
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/sign-up"
            element={
              <Register
                onRegister={handleRegister}
                passowrdInput={authorizationData.password}
                emailInput={authorizationData.email}
                handleChangeInput={handleChangeInput}
              />
            }
          />
          <Route
            path="/sign-in"
            element={
              <Login
                onLogin={handleLogin}
                passowrdInput={authorizationData.password}
                emailInput={authorizationData.email}
                handleChangeInput={handleChangeInput}
              />
            }
          />
          <Route path="/" element={<ProtectedRoute loggedIn={loggedIn} />}>
            <Route
              path="/"
              element={
                <>
                  <Header
                    link={"/sign-in"}
                    userEmail={userEmail}
                    linkText={"Выход"}
                    onSignOut={logOut}
                  />
                  <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                    cards={cards}
                  />
                </>
              }
            />
          </Route>
        </Routes>

        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopup}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopup}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopup}
          onAddPlace={handleAddPlaceSubmit}
        />

        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          buttonText="Да"
          containerType="popup__container_input_noinputs"
          isOpen={false}
          onClose={closeAllPopup}
        ></PopupWithForm>

        <ImagePopup
          card={selectedCard}
          isOpen={selectedCard.link}
          name="popup-image"
          containerType="popup__container-image"
          onClose={closeAllPopup} />

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopup}
          name="info"
          containerType="infoTooltip"
          isOk={registrated}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}
