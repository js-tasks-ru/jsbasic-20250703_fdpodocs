
// Напишите функцию checkSpam(str), возвращающую true, если str содержит '1xBet' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру

function checkSpam(str) {

let newStr = str.toLowerCase().trim();
let xBetTolowerCase = ('1xBet').toLowerCase();
let XXXTolowerCase = ('XXX').toLowerCase();

if (newStr.includes(xBetTolowerCase) || newStr.includes(XXXTolowerCase)) { 
    return true; 
  } else {
    return false;
  }
};
