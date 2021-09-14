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
div2.appendChild(h44);

let h22 = document.createElement('h2');
h22.innerHTML = 'Initially designed to';
div2.appendChild(h22);

let p33 = document.createElement('p');
p33.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
div2.appendChild(p33);

let button2 = document.createElement('button');
button2.innerHTML = 'Start here'; 
div2.appendChild(button2);


//как убрать отступы по умолчанию?


h1.style.marginTop = '150px';
h1.style.marginBottom = '6px';
h1.style.textAlign = 'center';
h1.style.fontFamily = 'Arvo';
h1.style.fontSize = '36px';
h1.style.lineHeight = '48px';
h1.style.color = '#212121';
h1.style.marginBottom = '30px';
p1.style.marginTop = '0';
p1.style.marginBottom = '60px';
p1.style.textAlign = 'center';
p1.style.fontFamily = 'Open Sans';
p1.style.fontSize = '14px';
p1.style.lineHeight = '26px';
p1.style.color = '#9FA3A7';

 
div12.style.display = 'grid';
div12.style.gridTemplateColumns = '1fr 1fr';
div12.style.gridColumnGap = '90px';

div1.style.display = 'grid';
div1.style.height = '500px';
h2.style.textAlign = 'center';
h2.style.margin = '0';
h2.style.padding = '0';
h2.style.fontFamily = 'Arvo';
h2.style.fontSize = '36px';
h2.style.lineHeight = '46px';
h2.style.fontStyle = 'normal';
h2.style.fontWeight= 'normal';
p3.style.textAlign = 'center';
p3.style.textAlign = 'center';
p3.style.width = '85%';
p3.style.margin = '0';
h4.style.textAlign = 'center';
h4.style.marginTop = '90px';
h4.style.marginBottom = '30px';
button1.style.width = '147px';
button1.style.height = '46px';
button1.style.border = '3px solid #FFC80A';
button1.style.borderRadius = '14px';
button1.style.marginLeft = 'auto';
button1.style.marginRight = 'auto';
button1.style.textTransform = 'uppercase';


div2.style.display = 'grid';
div2.style.height = '500px';
div2.style.backgroundColor = '#8F75BE';
p33.style.textAlign = 'center';
p33.style.textAlign = 'center';
p33.style.width = '85%';
p33.style.margin = '0';
h22.style.textAlign = 'center';
h22.style.fontFamily = 'Arvo';
h22.style.fontSize = '36px';
h22.style.lineHeight = '46px';
h22.style.fontStyle = 'normal';
h22.style.fontWeight= 'normal';
h22.style.color = 'white';
h44.style.textAlign = 'center';
h44.style.color = '#FFC80A';
h44.style.marginTop = '90px';
button2.style.width = '147px';
button2.style.height = '46px';
button2.style.border = '3px solid #FFC80A';
button2.style.borderRadius = '14px';
button2.style.marginLeft = 'auto';
button2.style.marginRight = 'auto';
button2.style.textTransform = 'uppercase';
