let object34 = {
    name: 'sasha',
    talk: 'i want to eat'
};

// from homework JS07
let Calc = function() {
    name: 'calculator';
    talk: 'click';
    eat: 'numbers'
};

object34.__proto__ = Calc;
console.log(object34);

object34.prototype = Calc;
console.log(object34);






















/*const D = function() {
    this.create = function(name) {
        const elem = document.createElement(name);
        return elem;
    }

    this.attr = function(elem, name, value) {
        elem.setAttribute(name, value);
        return elem.getAttribute(name); //возвращнение значения поэтому return
    }

    this.html = function(elem, value) {
        if (value) elem.innerHTML = value;
        return elem.innerHTML;
    }  
};

const d = new D();
console.log(d);

const h2 = d.create('h2');
const p1 = d.create('p');
const div = d.create('div');

d.html(h2, 'element h2');
d.html(p1, 'element p');
d.html(div, 'element div');

d.attr(h2, 'class', 'title');

console.log(h2);
console.log(p1);
console.log(div);

console.log(d.html(p1));
console.log(d.attr(h2,'class'));*/