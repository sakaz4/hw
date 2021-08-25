//  задание 1.0

let name = prompt('как вас зовут?'),
    age = prompt('какой ваш возраст?'),
    city = prompt('откуда вы?'),
    phone = prompt('укажите номер своего телефона'),
    email = prompt('укажите адрес своей электронной почты'),
    company = prompt('укажите место работы');

console.log('Меня зовут ' + name + ' мне ' + age + '. Я проживаю в городе ' + city + ' и работаю в компании ' + company + ' . Мои контактные данные: ' + phone + ' и ' + email );

//  задание 2.0

let year = 2021 - age;
console.log('Меня зовут ' + name + ' я родился в ' + year + ' году ');

//  задание 3.0

let str = prompt();

if ((+str[0] + +str[1] + +str[2]) === (+str[3] + +str[4] + +str[5]))

{
    console.log('Да');
}

else
{
    console.log('нет');
}



//  задание 4.0

let a = 1;
if (a > 0) {
    console.log('верно');
} else if (a <= 0) {
    console.log('неверно');
}
let aa = 0;
if (aa > 0) {
    console.log('верно');
} else if (aa <= 0) {
    console.log('неверно');
}
let aaa = -1;
if (aaa > 0) {
    console.log('верно');
} else if (aaa <= 0) {
    console.log('неверно');
}

//  задание 5.0

let a5 = 10,
    b5 = 2;
console.log(a5 + b5);
console.log(a5 - b5);
console.log(a5 * b5);
console.log(a5 / b5);

if ((a5 + b5) >  1) {
    console.log((a5 + b5) * (a5 + b5));
}

//  задание 6.0

if ((2 < a5 && a5 < 11) || (6 <= b5 && b5 < 14)) {
    console.log('верно');
} else {
    console.log('неверно');
}

//  задание 7.0

const time = 44

switch (true) {
    case (time >=0 && time < 16):
        console.log('1 четверть часа');
        break;
    case (time >=16 && time < 31):
        console.log('2 четверть часа');
        break;
    case (time >=31 && time < 46):
        console.log('3 четверть часа');
        break;
    case (time >=46 && time <= 59):
        console.log('4 четверть часа');
        break;
}

//  задание 8.0

const day = 100;

switch (true) {
    case (day >= 1 && day < 11):
        console.log('1 декада');
        break;
    case (day >= 11 && day < 21):
        console.log('2 декада');
        break;
    case (day >= 21 && day <= 31):
        console.log('3 декада');
        break;
    default:
        console.log('иди и купи календарь')
}

// задание 9.0 

let sec = 1,
    min = sec * 60,
    hour = min * 60,
    day2 = hour * 24,
    weak = day2 * 7,
    month = day2 * 31,
    year2 = month * 12;

let sec2 = 386399;

switch (true) {
    case (sec2 >= 1 && sec2 < 60):
        console.log('менее 1 минуты');
        break;
    case (sec2 == 60):
        console.log('1 минута');
        break;
    case (sec2 >= 1 && sec2 < 3600):
        console.log('менее 1 часа');
        break;
    case (sec2 == min * 60):
        console.log('1 час');
        break;
    case (sec2 < hour * 24):
        console.log('менее 1 дня');
        break;
    case (sec2 == hour * 24):
        console.log('1 день');
        break;
    case (sec2 < (hour * 24) * 7):
        console.log('менее недели');
        break;
    case (sec2 == days * 7):
        console.log('неделя');
        break;
    case (sec2 < (hour * 24) * 31):
        console.log('менее месяца');
        break;
    case (sec2 == day2 * 31):
        console.log('1 месяц');
        break;
    case (sec2 < month * 12):
        console.log('менее 1 года');
        break;
    case (sec2 == month * 12):
        console.log('1 год');
        break;
}   

console.log(year2 / day2 + ' дней в году ');
console.log(year2 / hour + ' часов в году ');
console.log(year2 / min + ' минут в году ');
console.log(year2 / sec + ' секунд в году ');

// задание 10

switch (true) {
    case (day >= 1 && day <= 31):
        console.log('Этот день в 1 месяце');
        break;
    case (day >= 32 && day <= 59):
        console.log('Этот день во 2м месяце');
        break;
    case (day >= 60 && day <= 91):
        console.log('Этот день в 3м месяце');
        break;
    case (day >= 92 && day <= 120):
        console.log('Этот день в 4м месяце');
        break;
    case (day >= 121 && day <= 151):
        console.log('Этот день в 5м месяце');
        break;
    case (day >= 152 && day <= 181):
        console.log('Этот день в 6м месяце');
        break;
    case (day >= 182 && day <= 212):
        console.log('Этот день в 7м месяце');
        break;
    case (day >= 213 && day <= 243):
        console.log('Этот день в 8м месяце');
        break;
    case (day >= 244 && day <= 273):
        console.log('Этот день в 9м месяце');
        break;
    case (day >= 274 && day <= 304):
        console.log('Этот день в 10м месяце');
        break;
    case (day >= 305 && day <= 334):
        console.log('Этот день в 11м месяце');
        break;
    case (day >= 335 && day <= 365):
        console.log('Этот день в 12м месяце');
    break;
}

switch (true) {
    case (day <= 59):
        console.log('зима');
        break;
    case (day > 59 && day <= 151):
        console.log('весна');
        break;
    case (day > 151 && day <= 243):
        console.log('лето');
        break;
    case (day > 243 && day <= 334):
        console.log('весна');
        break;
    case (day > 334):
        console.log('зима');
        break;
}

