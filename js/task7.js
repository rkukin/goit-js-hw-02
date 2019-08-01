"use strict";

let input;
let sum = 0;
const numbers = [];

do {
  input = prompt("Введите число");
  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(Number(input));
  }
} while (input !== null);

for (let number of numbers) {
  sum = sum + number;
}

alert(`Общая сумма чисел равна ${sum}`);
