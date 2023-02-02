function counterOddEvenZero(array) {
  let oddCounter = 0;
  let evenCounter = 0;
  let zeroCounter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      zeroCounter++;
    }
    if (array[i] % 2 == 0 && array[i] !== 0 && typeof array[i] == "number") {
      evenCounter++;
    }
    if (array[i] % 2 == 1 && typeof array[i] == "number") {
      oddCounter++;
    }
  }
  arrayCounter++;
  console.log("Массив №" + arrayCounter);
  console.log(array);
  console.log(
    `Количество нечётных цифр: ${oddCounter}\nКоличество чётных цифр: ${evenCounter}\nКоличество нулей: ${zeroCounter}`
  );
  oddCounter, evenCounter, zeroCounter = 0;
}

let arrayCounter = 0;

let arrayExample1 = [1, "1", 1, 2, 3, 4, 5, 6, 0, "0", false, null, NaN];
counterOddEvenZero(arrayExample1);
let arrayExample2 = [1, "1", 1, 2, 3, 4, 5, 6, 0, 0, "0", true, null, NaN];
counterOddEvenZero(arrayExample2);
let arrayExample3 = [1, "1", 1, 2, 3, 4, 10, 11, 5, 6, 0, 0, "0", null, NaN];
counterOddEvenZero(arrayExample3);
