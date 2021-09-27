let title = document.createElement('title');
title.innerHTML = 'Want';  

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
console.log(title);
console.log(metaUtf8);
document.head.appendChild(title);
document.head.appendChild(metaUtf8);

window.onload = init(); // создаём todo на странице

function init() {   
    let todoList = document.createElement("div"); // создаем div для нашего todo списка
    todoList.innerHTML = '<ul class="todo"><li><input class="input" placeholder="пишите сюда" type="text"></li></ul>'; // ul и первый его элемент - поле ввода
    document.body.appendChild(todoList); // добавляем его в body страницы
    document.querySelector('.input').onchange = processInput; // привязываем к событию изменения инпута свою функцию обработчик
    // что-то написали и нажали enter - вызвалась функция processInput
};

function processInput(event) {
    // функция вызывается когда в input вводят новое значение и нажимают enter
    let inputText = document.querySelector('.input').value; // достаём строку, которую ввели в input

let listElement = document.createElement("li"); // создаем новый элемент списка
    listElement.innerText = inputText; // устанавливаем ему нашу введенную строку в качестве текста
    listElement.onclick = editListItem; // привязываем события клика на него функцию editListItem
    document.querySelector('.todo').appendChild(listElement); // добавляем его в todo список

    document.querySelector('.input').value = ""; // очистим поле ввода
};

function editListItem(event) {
    // функция вызывается, когда кликают на элемент списка
    // event.target - это тот элемент, на который тыкнули
    let newValue = prompt("Что хочешь поменять?"); // спрашиваем про новое значение
    event.target.innerText = newValue; // изменяем текст на тот, который ввели в prompt
}
