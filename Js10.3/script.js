const AA = function(name) {
    this.element = document.createElement(name);
    this.attr = function(name, value) {
        if (Array.isArray(value)) {
            value.forEach((currentValue) => {
                this.element.setAttribute(name, currentValue);
            })
        } else {
            this.element.setAttribute(name, value);
        }
        return this;
    }

    this.html = function(value) {
        if(typeof value === 'string' && value) {
            this.element.innerHTML = value;
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

    this.addClass = function(name) {
        this.element.classList.add(name);
        return this;
    }
    this.removeClass = function(name) {
        this.element.classList.remove(name);
        return this;
    }
    this.toggleClass = function(name) {
        this.element.classList.toggle(name);
        return this;
    }

    this.hasClass = function(name) {
        const classArr =  this.element.classList;
        // return classArr.contains(name); //like includes in Array
        let result = false;
        classArr.forEach(p => {
            if (p === name) {
                result = true;
            }
        })
        return result; 
    }
    
    this.append = function(newElement, beforeElementTag) {
        if(!beforeElementTag) {
            this.element.appendChild(newElement);
        } else {
            const beforeElement = this.element.querySelector(beforeElementTag);
            this.element.insertBefore(newElement, beforeElement);
        }
        return this;
    }

    this.on = function(eventName, func) {
        this.element.addEventListener(eventName, func);
        return this;
    }
    
    this.addToPage = function() {
        document.body.appendChild(this.element);
        return this;
    }
}

const LinkAA = function() {
    AA.apply(this, arguments);

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

const ImageAA = function() {
    AA.apply(this, arguments);
    this.element = new Image();
}

const btnAdd = new AA('button');
btnAdd.html('Hello this').addClass('item').on('click', function() {
    console.log('click this');
}).addToPage();

const newLink = new LinkAA('a');
newLink.setHref('#').blank(true).html('link').addToPage();
console.log(newLink);
