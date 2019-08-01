"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

function isLoginValid(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else return false;
}

function isLoginUnique(allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  } else return true;
}

function addLogin(allLogins, login) {
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      logins.push(login);
      return console.log("Логин успешно добавлен!");
    } else return console.log("Такой логин уже используется!");
  } else return console.log("Ошибка! Логин должен быть от 4 до 16 символов");
}

// Вызовы функции для проверки
addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
