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


let div12 = document.createElement('div');
div12.classList.add('block12');
document.body.appendChild(div12);

let div1 = document.createElement('div'); //добавляем div для левой части
div1.classList.add('block1');
div12.appendChild(div1);

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
button1.innerHTML = 'Start here'; 
div1.appendChild(button1);  // спросить про currentDiv вместо div









let div2 = document.createElement('div'); //добавляем div для левой части
div2.classList.add('block2');
div12.appendChild(div2);


let h44 = document.createElement('h4');
h44.innerHTML = 'studio';
div1.appendChild(h44);

let h22 = document.createElement('h2');
h22.innerHTML = 'Initially designed to';
div1.appendChild(h22);

let p33 = document.createElement('p');
p33.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
div1.appendChild(p33);

let button2 = document.createElement('button');
button2.innerHTML = 'Start here'; 
div2.appendChild(button2);






















