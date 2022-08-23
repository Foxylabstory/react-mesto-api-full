import Header from "./Header";
import Sign from "./Sign";
import React from 'react';
const Login = (props) => {
  return (
    <>
      <Header link={"/sign-up"} linkText={"Регистрация"} />
      <Sign
        header="Вход"
        buttonText="Войти"
        hidden={true}
        handleSubmit={props.onLogin}
        passwordInput={props.passwordInput}
        emailInput={props.emailInput}
        handleChangeInput={props.handleChangeInput}
      />
    </>
  );
};
export default Login;
