let Const = function(name) {
    this.element = document.createElement(name); //новый елемент создаётся при вызове функции внизу
    this.attr = function(name, value) {
        if (Array.isArray(value)) { //на каждом шаге цикла будем добавлять по атрибуту
            value.forEach((currentValue) => { //в () параметр, который будет функцией
                this.element.setAttribute(name, currentValue); // описание 1 круга цикла. Количество зависит от кол-ва элементовв в массиве
            }) 
                } else {
                    this.element.setAttribute(name, value);
                }
                return this;
    }

    this.html = function(value) {
        if(typeof value === 'string' && value) {  //если значение строчного типа и не пустое 
            this.element.innerHTML = value;// значение записываем в эл-т
        } 
        return this;
    }

    this.search = function(tag) {
        const searchElement = this.element.querySelector(tag);
        if(searchElement) {
            return searchElement;
        } else {
            return document.querySelector(tag);
            }
    }

    this.addClass = function(name) { // name - это параметр функции
        this.element.classList.add(name); // добавление класса
        return this; 
    }
    this.removeClass = function(name) { // name - это параметр функции
        this.element.classList.remove(name);    //удаление класса
        return this; 
    }
    this.toggleClass = function(name) { // name - это параметр функции
        this.element.classList.toggle(name); //переключение класса в элементе
        return this; 
    }

    this.hasClass = function(name) {
        const classArr =  this.element.classList;
        
        let result = false;
        classArr.forEach(p => {
            if (p === name) {
                result = true;
            }
        })
        return result; 
    }

    this.append = function(newElement, beforeElementTag) { // (новый элемент и эл-т, перед которым будет вставка)
        if(!beforeElementTag) { //отсутствует эл-т, перед которым надо вставлять новый эл-т т.е. новый эл-т единственный
            this.element.appendchild(newElement); //добавление эл-та 
        } else {                // иначе
            const beforeElement = this.element.querySelector(beforeElementTag) // создание эл-та и поиск эл-та по тэгу
            this.element.insertBefore(newElement, beforeElement) //эл-т и его вставка перед другим эл-том
        }
        return this;
    }

    this.on = function(eventName, func) {
        this.element.addEventListener(eventName, func); //добавление действия
        return this;
    }

    this.addToPage = function() {
        document.body.appendChild(this.element); // добавление элемента
        return this;
    }
}

const LinkConst = function() {
    Const.apply(this, arguments)
        
    this.blank = function(isBlank) {
        if(isBlank) {
            this.element.target = '_blank'
        } else {
            this.element.target = 'self'
        }
        return this;
    }
    
    this.setHref = function(href) {
        this.element.href = href;
        return this;
    }
}

const ImageConst = function() {
    Const.apply(this, arguments);
    this.element = new Image();
}

const btnAdd = new Const('button'); //при создании запускается функция - конструктор
btnAdd.html('Hello this').addClass('item').on('click', function() {
    console.log('click this');
}).addToPage();

const newLink = new Const('a');
newLink.setHref('#').blank(true).html('link').addToPage();
console.log(newLink);
