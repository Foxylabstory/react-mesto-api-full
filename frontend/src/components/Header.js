import { Link } from "react-router-dom";
import logoPath from "../images/header/mesto-russia-logo.svg";
import React from 'react';
export default function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" alt="Логотип сайта" src={logoPath} />
      <div className="header__container">
      <p className="header__email">{props.userEmail}</p>
      <Link className="header__link" to={props.link} onClick={props.onSignOut} >
          {props.linkText}
        </Link>
      </div>
    </header>
  );
}
