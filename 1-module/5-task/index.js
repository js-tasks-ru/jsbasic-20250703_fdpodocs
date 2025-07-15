// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, 
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Возврат значения
// Функция должна возвращать:
// Ту же строку, если усечение не требуется.
// Усечённую строку, если длина исходной строки больше maxlength.

// function truncate(str, n, maxlength){
//   if (str.length <= n) {return str};
//   const subString = str.slice(0, n-1); 
//   return (maxlength 
//     ? subString.slice(0, subString.inludes(" ")) 
//     : subString) + "…";
// };

function truncate(str, maxlength) {
   if (str.length > maxlength) {
    return str.substring(0, maxlength - 1) + "…";
   }
    return str; 
}