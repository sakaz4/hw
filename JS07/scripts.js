let Calc = function() {
    this.get = function() {
        this.a = +prompt('Введите число а');    //при помощи + преобразовываем строчные значения в численные
        this.b = +prompt('Введите число b');
        this.oper = prompt('Введите операцию: +, -, *, /, √, %');

        this.operation();
    };
    this.operation = function(){
        switch(this.oper) {
            case '+':
                this.result = this. a + this.b;
            break
            case '-':
                this.result = this. a - this.b;
            break
            case '*':
                this.result = this. a * this.b;
            break
            case '/':
                this.result = this. a / this.b;
            break

            case '√':
                this.result = Math.sqrt(this. a);
            break
            case '%':
                this.result = this. a / 100 * this.b;
            break

            deafault: this.result = 0;
        }
        this.show();
    };
    this.show = function(){
        alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result)
    };
};

let calc = new Calc();
calc.get();
