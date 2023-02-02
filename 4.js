function numbersFromAtoBdelay1s(startNumber, endNumber) {
  if (isNaN(endNumber) || isNaN(startNumber))
    return console.log("Ошибка ввода данных!");
  if (endNumber < startNumber)
    return console.log("Второе число должно быть больше!");
  console.log(`Числа от ${startNumber} до ${endNumber} с задержкой в 1 сек.`);    
  let number = startNumber;   
  let timer = setInterval(function () {
    if (number <= endNumber) {
      console.log(number);
      number++;
    }
  }, 1000);
}

let numberA = +prompt("Введите число A");
let numberB = +prompt("Введите число B");

numbersFromAtoBdelay1s(numberA, numberB);