const ApowN = (base, exp) => console.log(`${base}^(${exp}) = ` + Math.pow(base, exp));

a = +prompt("Введите число");
n = +prompt("Введите степень");
if (isNaN(a) || isNaN(n)) console.log("Ошибка ввода!");
else ApowN(a, n);