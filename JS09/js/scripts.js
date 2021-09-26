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
        ul1.innerHTML = `<form>
        <li>
            <input id="btn" type="button" value="жмякай" onclick="prompt('1-6')"/>
        </li>
        </form>
        `;
        document.body.appendChild(ul1);
} else {
    alert('неправильно хочешь, пробуй ещё');
}

let arr = (6);
arr = document.querySelector('#btn');
switch(arr) {
case 1: arr.splice(0, 0, 'buy bike');
break
case 2: arr.splice(1, 0, 'do bike fit');
break
case 3: arr.splice(2, 0, 'set up the work of all components');
break
case 4: arr.splice(3, 0, 'set up tubeless tires');
break
case 5: arr.splice(4, 0, 'ride fast die young');
break
case 6: arr.splice(5, 0, 'be fast and happy');
break
};

document.write(arr);



/*const inputText = document.querySelector('.input');
inputText.value*/


//<li><input class="input" placeholder="1-6" type="text" value"1-6"></li>


/*const inputText = document.querySelector('input')
inputText.value

при нажатии на кнопку берешь этот текст

создаешь элемент списка с этим текстом и очищаешь текст inputText.value = ''*/






















