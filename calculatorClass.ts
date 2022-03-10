{
    class Calculator {

        public container: HTMLDivElement;
        private output: HTMLDivElement;
        private span: HTMLSpanElement;
        public n1: string = null;
        public n2: string = null;
        public operator: string = null;
        public result:string = null;
        //声明所有按钮
        public keys: Array<Array<string>> = [
            ['Clear', '÷'],
            ['7', '8', '9', 'x'],
            ['4', '5', '6', '-'],
            ['1', '2', '3', '+'],
            ['0', '.', '=']
        ];
        constructor() {
            this.createContainer();
            this.createOutPut();
            this.createButtons();
            this.bindEvents();
        }
        createButtons() {
            this.keys.forEach((textList: Array<number | string>) => {
                let div: HTMLDivElement = document.createElement('div');
                div.classList.add('row')
                textList.forEach((text: number | string) => {
                    this.createButton(text, div, `button text-${text}`);
                })
                this.container.appendChild(div);
            })
        }

        //创建按钮
        createButton(text: string | number, container: HTMLElement, className?: string): HTMLButtonElement {
            let button: HTMLButtonElement = document.createElement('button')
            button.textContent = text.toString();

            // className && button.classList.add(className);
            if (className) {
                button.className = className;
            }

            container.appendChild(button);

            return button;
        }
        createContainer() {
            let container: HTMLDivElement = document.createElement('div');
            container.classList.add("calculator");
            document.body.appendChild(container);
            this.container = container
        }

        createOutPut() {
            let output: HTMLDivElement = document.createElement('div');
            output.classList.add('output');
            let span: HTMLSpanElement = document.createElement('span');
            span.textContent = '0'
            output.appendChild(span);
            this.container.appendChild(output);
            this.output = output;
            this.span = span;
        }

        bindEvents() {
            this.container.addEventListener('click', (event) => {

                if (event.target instanceof HTMLButtonElement) {
                    let button: HTMLButtonElement = event.target;
                    let text: string | number = button.textContent;
                    this.updataNumberOrOperator(text);

                }

            })
        }
        updateNumber(name, text){
            if(this[name]){
                this[name] = this[name] + text;
            } else {
                this[name] = text
            }
            this.span.textContent = this[name].toString();

        }

        updataNumbers(text) {
            //判断操作符
            if (this.operator) {
                //更新n2
                this.updateNumber('n2', text);
            } else {
                //没有操作符,更新n1
                this.updateNumber('n1', text);
            }
        }

        updateResult() {
            //计算结果
            let result;
            let n1:number = parseFloat(this.n1);
            let n2:number = parseFloat(this.n2);

            if (this.operator === '+') {
                result = n1 + n2;
            } else if (this.operator === '-') {
                result = n1 - n2;
            } else if (this.operator === 'x') {

                result = n1 * n2;
            } else if (this.operator === '÷') {
               
                    result = n1 / n2;

                
            }
            result = result.toFixed(6);
            if(n2 === 0){
                result = '不是数字'
            }
            this.span.textContent = result.toString();
            this.n1 = null;
            this.n2 = null;
            this.operator = null;
            this.result = result;

            console.log(this.n1, this.operator, this.n2);

        }

        updataNumberOrOperator(text) {
            if ('0123456789'.indexOf(text) >= 0) {

                this.updataNumbers(text);

            } else if ('+-x÷'.indexOf(text) >= 0) {
                if(this.n1 === null){
                    this.n1 = this.result;
                }
                //更新操作符
                this.operator = text;
            } else if ('='.indexOf(text) >= 0) {
                this.updateResult();
            } else if(text === 'Clear'){
                this.n1 = null;
                this.n2 = null;
                this.operator = null;
                this.result = null;
                this.span.textContent = '0';
            }
        }



    }
    console.log("123");

    new Calculator();

}