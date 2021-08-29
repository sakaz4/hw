console.log('Задание №1');

for(let v = 1; v < 51; v++){
    console.log(v);
}

for(let u = 35; u > 7; u--){
    console.log(u);
}

console.log('Задание №2');

let z = 89;
while(z >= 12) { 
    console.log(z);
    z--;
}
console.log(z);


console.log('Задание №3');

let q = 100; 
let sum = 0;
for (let i = 1; i <= q; i++) {
    sum = 0;
    for (let j = 1; j <= i; j++) {
        sum += j;
    }
}
console.log(' Sum ' + q + ' = ' + sum)


console.log('Задание №4');

let a = 5; 
let sum2 = 0;
for (let i = 1; i <= a; i++) {
    sum = 0;
    for (let j = 1; j <= i; j++) {
        sum += j;
    }
    console.log(' Sum ' + i + ' = ' + sum)
}

console.log('Задание №5');

for(let k = 8; k <= 56; k++) { 
    if (k % 2 == 1) continue; // выводим только чётные числа
    console.log(k);
}

console.log('Задание №6');

for (let m = 2; m <= 10; m++){
  for (let m2 = 1; m2 <= 10; m2++)
    console.log(m + ' * ' + m2 + ' = ' + (m * m2));
}

console.log('Задание №7');

let num = 0;
for (let n7 = 1000; n7 >= 50; num++){
  n7 = n7 / 2;
}
console.log('Количество итераций: ' + num);

console.log('Задание №8');

let sum8 = 0;
let count = 0;

FullCycle: for(let value; value !== Number; count++){
  value = +prompt("Введите число", '');
  sum8 += value;
    if (value == 0) {
      break FullCycle;
    }     

    if (isNaN(value)) {
      alert('Ошибка');
      break FullCycle;
    } 
}
console.log( 'Сумма: ' + sum8 + '</br>Среднее арифметическое: ' + (sum8 / count));

console.log('Задание №9');

const string = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
const arr = string.split(' ');

min = arr[0];
max = arr[0];

for (let r = 1; r < arr.length; r++) {
  if (arr[r] > max) max = arr[r];
  if (arr[r] < min) min = arr[r];
}
console.log('Максимальное число в массиве: ' + max + '<br/>Минимальное число в массиве: ' + min);

// document.write('<br/>Максимальное число в массиве: ' + Math.max.apply(null, arr) + '<br/>Минимальное число в массиве: ' + Math.min.apply(null, arr));


















