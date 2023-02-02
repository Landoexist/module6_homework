function checkPrimeNumber(number) {
  let result;
  if (typeof number !== "number" || number % 1 != 0) {
    result = "Данные неверны!";
  } else if (number > 1000 || number < 0) {
    result = "Данные неверны!\nВведите число от 0 до 1000!";
  } else if (number === 0 || number === 1) {
    result = `Ваше число ${number} не явлется ни простым, ни составным.`;
  } else {
    for (var i = 2; i < number; i++) {
      if (number % i == 0) {
        result = `Ваше число ${number} является составным.`;
        return result;
      }
    }
    result = `Ваше число ${number} является простым.`;
  }
  return result;
}

let checkNumber = +prompt("Проверка числа");
alert(checkPrimeNumber(checkNumber));
