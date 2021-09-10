console.log('Задание 1');
console.log('aaa@bbb@ccc'.replace(/@/g, '!'));

console.log('Задание 2');
console.log('2025-12-31'.replace(/2025-12-31/g, '31/12/2025'));

console.log('Задание 3');
let str3 = 'Я учу javascript!';
console.log(str3.substring(2,5) + ' substring');
console.log(str3.substr(2,3) + ' substr');
console.log(str3.slice(2,6) + 'slice');

console.log('Задание 4');
let arr = [4, 2, 5, 19, 13, 0, 10];
let result = arr.map(x => x ** 3);
//console.log(result);    // кубы значений всех элементов

let sum = result.reduce(add,0);
function add(accumulator, a) {
    return accumulator + a;
}
//console.log(sum);   // сумма значений всех элементов
console.log(Math.sqrt(sum,2));   // итоговый ответ

console.log('Задание 5');

let a1 = 3,
    a2 = 6,
    b1 = 5,
    b2 = 1,
    c1 = Math.abs(a1 - b1),
    c2 = Math.abs(a2 - b2);
console.log('c1 = ' + c1);
console.log('c2 = ' + c2);

console.log('Задание 6');

let MyDate = new Date();
let MyDateString;
MyDate.setDate(MyDate.getDate() + 20);
MyDateString = ('0' + MyDate.getDate()).slice(-2) + '.' + ('0' + (MyDate.getMonth()+1)).slice(-2) + '.' + MyDate.getFullYear();

console.log(MyDateString);

console.log('Задание 7');

let str = 'aa aba abba abbba abca abea';
console.log(str.replace(/ab+a+/g));

console.log('Задание 8');

function validation(phone, str){
    if (phone.test(str))
    {
       console.log("true");
    }
    
    else console.log("false");
    }
    
    validation(/^\+(375|80)(29|33|44|17)\w{7}$/, '+375291234567');


console.log('Задание 9');

function validation(mail, str){
    if (mail.test(str))
    {
    console.log("true");
    }
    else console.log("false");
    } 
    validation(/^[A-Za-z]{1}[A-Za-z0-9-_]{2,11}@[A-Za-z]{2,5}\.[a-z]{2,11}$/, 'sas.kaz.j@yandex.by');










