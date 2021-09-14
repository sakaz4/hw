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

































