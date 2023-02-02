function sum(number1){
    return function (number2){
        return number1 + number2;
    };
}

result = sum(2)(2.1);
console.log(result);