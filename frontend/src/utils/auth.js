export const BASE_URL = "http://api.foxylab.nomoredomains.sbs"; // https://auth.nomoreparties.co

const isOk = (response) => {
  return response.ok
    ? response.json()
    : Promise.reject(`Произошла ошибка: ${response.status}`);
};

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Cross-Origin-Resource-Policy': 'cross-origin',
    },
    body: JSON.stringify({password, email})
  }).then(isOk);
};

export const authorization = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Cross-Origin-Resource-Policy': 'cross-origin',
    },
    body: JSON.stringify({password, email})
  }).then(isOk);
};

export const deauthorization = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: "GET",
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Cross-Origin-Resource-Policy': 'cross-origin',
    },
  }).then(isOk);
};

export const userCheck = (/* token */) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
      'Cross-Origin-Resource-Policy': 'cross-origin',
      /* "Authorization": `Bearer ${token}`, */
    },
  }).then(isOk);
};
