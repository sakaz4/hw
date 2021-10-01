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
    todoList.innerHTML = '<ul class="todo"><li><h3>список задач</h3></li><li><input class="input" placeholder="пишите сюда" type="text" value"1-6"></li></ul>'; // ul и первый его элемент - поле ввода
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


div.style.marginTop = '130px';



























/*let f = prompt ('Пишите сюда');
    if ( f == 'want') {
        let h1 = document.createElement('h1');
        h1.innerHTML = 'list to do';
        document.body.appendChild(h1);

let div1 = document.createElement('div');
        div1.classList.add('1st');
        document.body.appendChild(div1); 
        let ul1 = document.createElement('ul');
        
        let li = document.createElement('li');
        let inputValue = document.getElementById('myInput').value;
        let t = document.createTextNode(inputValue);
        li.appendChild(t);
        ul.appendChild(li);

        let ul1 = document.createElement('ul');
        ul1.innerHTML = `<form>
        <li><input class="input" placeholder="1-6" type="text" value"1-6"></li>
        </form>`;

        document.body.appendChild(ul1);
} else {
        alert('неправильно хочешь, пробуй ещё');
}
*/















































