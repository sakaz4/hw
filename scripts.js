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
