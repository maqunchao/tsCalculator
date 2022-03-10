{
    var Calculator = /** @class */ (function () {
        function Calculator() {
            this.n1 = null;
            this.n2 = null;
            this.operator = null;
            this.result = null;
            //声明所有按钮
            this.keys = [
                ['Clear', '÷'],
                ['7', '8', '9', 'x'],
                ['4', '5', '6', '-'],
                ['1', '2', '3', '+'],
                ['0', '.', '=']
            ];
            this.createContainer();
            this.createOutPut();
            this.createButtons();
            this.bindEvents();
        }
        Calculator.prototype.createButtons = function () {
            var _this = this;
            this.keys.forEach(function (textList) {
                var div = document.createElement('div');
                div.classList.add('row');
                textList.forEach(function (text) {
                    _this.createButton(text, div, "button text-" + text);
                });
                _this.container.appendChild(div);
            });
        };
        //创建按钮
        Calculator.prototype.createButton = function (text, container, className) {
            var button = document.createElement('button');
            button.textContent = text.toString();
            // className && button.classList.add(className);
            if (className) {
                button.className = className;
            }
            container.appendChild(button);
            return button;
        };
        Calculator.prototype.createContainer = function () {
            var container = document.createElement('div');
            container.classList.add("calculator");
            document.body.appendChild(container);
            this.container = container;
        };
        Calculator.prototype.createOutPut = function () {
            var output = document.createElement('div');
            output.classList.add('output');
            var span = document.createElement('span');
            span.textContent = '0';
            output.appendChild(span);
            this.container.appendChild(output);
            this.output = output;
            this.span = span;
        };
        Calculator.prototype.bindEvents = function () {
            var _this = this;
            this.container.addEventListener('click', function (event) {
                if (event.target instanceof HTMLButtonElement) {
                    var button = event.target;
                    var text = button.textContent;
                    _this.updataNumberOrOperator(text);
                }
            });
        };
        Calculator.prototype.updateNumber = function (name, text) {
            if (this[name]) {
                this[name] = this[name] + text;
            }
            else {
                this[name] = text;
            }
            this.span.textContent = this[name].toString();
        };
        Calculator.prototype.updataNumbers = function (text) {
            //判断操作符
            if (this.operator) {
                //更新n2
                this.updateNumber('n2', text);
            }
            else {
                //没有操作符,更新n1
                this.updateNumber('n1', text);
            }
        };
        Calculator.prototype.updateResult = function () {
            //计算结果
            var result;
            var n1 = parseFloat(this.n1);
            var n2 = parseFloat(this.n2);
            if (this.operator === '+') {
                result = n1 + n2;
            }
            else if (this.operator === '-') {
                result = n1 - n2;
            }
            else if (this.operator === 'x') {
                result = n1 * n2;
            }
            else if (this.operator === '÷') {
                result = n1 / n2;
            }
            result = result.toFixed(6);
            if (n2 === 0) {
                result = '不是数字';
            }
            this.span.textContent = result.toString();
            this.n1 = null;
            this.n2 = null;
            this.operator = null;
            this.result = result;
            console.log(this.n1, this.operator, this.n2);
        };
        Calculator.prototype.updataNumberOrOperator = function (text) {
            if ('0123456789'.indexOf(text) >= 0) {
                this.updataNumbers(text);
            }
            else if ('+-x÷'.indexOf(text) >= 0) {
                if (this.n1 === null) {
                    this.n1 = this.result;
                }
                //更新操作符
                this.operator = text;
            }
            else if ('='.indexOf(text) >= 0) {
                this.updateResult();
            }
            else if (text === 'Clear') {
                this.n1 = null;
                this.n2 = null;
                this.operator = null;
                this.result = null;
                this.span.textContent = '0';
            }
        };
        return Calculator;
    }());
    console.log("123");
    new Calculator();
}
