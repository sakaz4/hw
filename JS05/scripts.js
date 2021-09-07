console.log('Функции');

/*function hello() { // d фигурных с
    alert('Добро пожаловать');
}
hello(); // что бы вызвать функцию повторно, то достаточно просто её написать

function getName() {//функция начинается с get
    var name = prompt('как вас зовут?');

    alert(name);
} 
getName();

function getAge(){
    var age = prompt('сколько вам лет?');

    alert(age);
}
/*getName();
getAge();*/

/*var user = 'Иван';
function helloUser () {
    var defaultUser = 'Юзер';

    globalUser = 'Супер Юзер';

    user = 'Петя';
    
    var message = 'Привет ' + user;
    //alert(message);
}

console.log(user); // Иван*/

//helloUser();

// console.log(defaultUser); выдаёт ошибку

//console.log(globalUser);

/*function showMessage(from, text) {
    // маша: как дела?
    // алекс: привет
    alert(from + ': ' + text);
}*/

//showMessage('Маша', 'Как дела?');
//showMessage('алекс', 'привет');
//showMessage('сергей', 'всем привет?');

// Петя: undefined
//showMessage('петя'); //если не указать какой либо параметр, то при выводе будет undefined

function createArray(length) {
    // по умолчанию length = 10
    length = length || 10;
    var array = [];

    for(var i = 1; i <= length; i++) {
        array.push(i);
    }
    console.log(array);
}

createArray(3);
createArray(20);
createArray();

function test (a, b ,c) {
    console.log('--------------------------');
    console.log(a, b, c);

    //arguments - массив, который встроен в любую функцию, он скрыт
    console.log(arguments); // можно узнать есть в массиве доп элементы

        if (arguments.length > 3){ // если в массиве более 3х элементов, то они выведутся
            /*console.log(arguments[3]);
            console.log(arguments[4]);
            console.log(arguments[5]);*/
            for(var i = 0; i < arguments.length; i++) {
                console.log(arguments[i]);
            }
    }
}
//test(4,6,2)
test(4,6,2, 10, 12, 8) // большее количество значений не выполняется
//test() // undefined

function checkAge(age) {
    if (age >= 18) {
        return true; // при верном значении (больше 18) результат будет возвращаться
    } else {
        return false;// при неверном (менее 18)  значении, результат будет возвращён
    }
}

//checkAge(12); // доступ запрещён т.к. возраст меньше 18
var result = checkAge(32);
console.log(result); // попытка вернуть значение функции в консоль, по показывает undefined т.е. не возвращает

// что бы вернуть значение, надо использоваться return

if (result == true) console.log('Добро пожаловать'); // при значении менее 18 в консоль выведется "добро пожаловать"
else console.log('Доступ запрещён');

// в консоль вывелось значение 'Доступ запрещён' т.к. значение result < 18
// если меняем значение например на 32, то в консоли будет 'Добро пожаловать'


function showMove(age){
    if (checkAge(age) == true) {    // функцию не надо переписывать целиком, можно скопировать из примера выше
        return 'Приятного просмотра'    // если возвраст >18, то выведет значение 'Приятного просмотра'
    } else {
        return 'Фильм не для всех'  // если возвраст <18, то выведет значение 'Фильм не для всех' 
    }
} 
// внутри функции showMove мы вызываем функцию checkAge. checkAge возвращает либо true, либо false, а точнее строку целиком и эту строку мы передаём в консоль

console.log(showMove(56));  // выводим значение в консоль на примере значения 56 лет.

// теперь можно использовать функцию showMove с разными значениями
// при помощи return можно возвращать любые типы значений. Любые, которые есть в Java script


/*function sum(a, b) {
    return a + b;   // результат вычислений вернётся в return
}
var c = sum(5, 8); // sum - это сумма и в () надо перечислить значения, + ставить не надо
console.log(c);

var sum2 = sum;
console.log(sum2(9, 3)); // можно копировать функцию

// способы задания функции

function hello(user) {  // обычный способ (именованная функция т.к. после function идёт имя hello)
    console.log('Привет ' + user);
}


var hello = function() {    // альтернативный способ (анонимная функция т.к. функция без имени)
    console.log('Привет' + user);
};
hello('Ольга');

// оба варианта равносильны


var hello2,
    user = prompt('Ты кто?');   // у меременной user будет значение из вопроса, который задан через prompt

if (user != '') {   // если в ответе будет не пустота, то выполняется следующее условие
    hello2 = function() {return 'Привет ' + user};
} else {
    hello2 = function() {return 'Привет ' + Аноним};
}
var result = hello2();  // результат выполнения функции hello2 будет в переменной result
console.log(result);    //результат выполнения функции выводим в консоль


function ask(question, yes, no) { 
    if (confirm(question)) yes ()   // Confirm создаёт табличку с 2 вариантами ответа (ok, cancel). Если yes, то будет true, если cancel, то будет false. 
    else no ();
}

ask(
    'вы согласны?',
    function() {alert('Вы согласились');},
    function() {alert('Вы не согласны');},
)

/* функция ask принимает 3 параметра:
- question - вопрос 'вы согласны?'
- yes - анонимная функция function() {alert('Вы согласились');},
- no - анонимная функция function() {alert('Вы не согласны');},*/


// рекурсия - действие, при котором функция вызывает саму себя, для того, что бы выполнить одно и тоже действие по кругу до тех пор, пока не будет достигнуто какое - либо условие.

function printArray(array) { 
    console.log(array[i]);
    i++;
    if (i < array.length) printArray(array);
}

var i = 0;  // помер элемента, который будем выводить в консоль
printArray([1, 89, 2, -9, 6]);

// т.к. счётчик i создан вне функции, то он будет меняться каждый раз, когда будет выполняться действие i++




