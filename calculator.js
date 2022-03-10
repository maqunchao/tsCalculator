{
    //创建按钮
    function createButton(text, container, className) {
        var button = document.createElement('button');
        button.textContent = text.toString();
        // className && button.classList.add(className);
        if (className) {
            button.className = className;
        }
        container.appendChild(button);
        return button;
    }
    //创建整个容器
    var container_1 = document.createElement('div');
    container_1.classList.add("calculator");
    document.body.appendChild(container_1);
    //创建output输出行
    var output = document.createElement('div');
    output.classList.add('output');
    var span_1 = document.createElement('span');
    span_1.textContent = '0';
    output.appendChild(span_1);
    container_1.appendChild(output);
    var n1_1;
    var n2_1;
    var operator_1;
    //监听容器的点击
    container_1.addEventListener('click', function (event) {
        console.log("12");
        if (event.target instanceof HTMLButtonElement) {
            var button = event.target;
            var text = button.textContent;
            if ('0123456789'.indexOf(text) >= 0) {
                //判断操作符
                if (operator_1) {
                    //更新n2
                    if (n2_1) {
                        n2_1 = parseInt(n2_1.toString() + text);
                    }
                    else {
                        n2_1 = parseInt(text);
                    }
                    span_1.textContent = n2_1.toString();
                }
                else {
                    //没有操作符,更新n1
                    if (n1_1) {
                        n1_1 = parseInt(n1_1.toString() + text);
                    }
                    else {
                        n1_1 = parseInt(text);
                    }
                    span_1.textContent = n1_1.toString();
                }
            }
            else if ('+-x÷'.indexOf(text) >= 0) {
                //更新操作符
                operator_1 = text;
            }
            else if ('='.indexOf(text) >= 0) {
                //计算结果
                var result = void 0;
                if (operator_1 === '+') {
                    result = n1_1 + n2_1;
                }
                else if (operator_1 === '-') {
                    result = n1_1 - n2_1;
                }
                else if (operator_1 === 'x') {
                    result = n1_1 * n2_1;
                }
                else if (operator_1 === '÷') {
                    result = n1_1 / n2_1;
                }
                span_1.textContent = result.toString();
            }
            console.log(n1_1, operator_1, n2_1);
        }
        else {
        }
    });
    //声明所有按钮
    var keys = [
        ['Clear', '÷'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ];
    //将按钮加入到container中
    keys.forEach(function (textList) {
        var div = document.createElement('div');
        div.classList.add('row');
        textList.forEach(function (text) {
            var button = createButton(text, div, "button text-" + text);
            //不给每个按钮添加监听器, 给整个容器添加监听器
            //    button.addEventListener('click', (event)=>{
            //         console.log(event.target);
            //    })
        });
        container_1.appendChild(div);
    });
}
