let title = document.createElement('title');
title.innerHTML = 'Want';  

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

console.log(title);
console.log(metaUtf8);

document.head.appendChild(title);
document.head.appendChild(metaUtf8);

let f = prompt ('Пишите сюда');
    if ( f == 'want') {
        let h1 = document.createElement('h1');
        h1.innerHTML = 'list to do';
        document.body.appendChild(h1);
        h1.style.marginTop = '15px';
        h1.style.marginBottom = '20px';
        h1.style.marginLeft = '2px';
        h1.style.marginRight = '2px';
        h1.style.backgroundColor = 'blue';
        h1.style.color = 'aliceblue';
        h1.style.textAlign = 'center';

        let div1 = document.createElement('div');
        //div1.innerHTML = '1st div';
        div1.classList.add('1st');
        document.body.appendChild(div1);
            
        let ul1 = document.createElement('ul');
        ul1.innerHTML = `<li><input placeholder="хотелку писать в сюда" type="text" size="30" ></li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>`;
        document.body.appendChild(ul1);

} else {
    alert('неправильно хочешь, пробуй ещё');
}




























