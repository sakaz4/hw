document.head.innerHTML = '';
document.body.innerHTML = '';

let title = document.createElement('title');
title.innerHTML = 'Homework JS08';  

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

console.log(title);
console.log(metaUtf8);

document.head.appendChild(title);
document.head.appendChild(metaUtf8);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';

let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
document.body.appendChild(h1);
document.body.appendChild(p1);


let div1 = document.createElement('div'); //добавляем div для левой части
div1.classList.add('block1');
document.body.appendChild(div1);

let h4 = document.createElement('h4');
h4.innerHTML = 'freelancer';
div1.appendChild(h4);

let h2 = document.createElement('h2');
h2.innerHTML = 'Initially designed to ';
div1.appendChild(h2);

let p3 = document.createElement('p');
p3.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
div1.appendChild(p3);


let button1 = document.createElement('button');
button1.innerHTML = 'I am A Button!'; 
div1.appendChild(button1);  // спросить про currentDiv









let div2 = document.createElement('div'); //добавляем div для левой части
div2.classList.add('block2');
document.body.appendChild(div2);

























