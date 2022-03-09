function createButton(text, container, className) {
    var button = document.createElement('button');
    button.textContent = text;
    // className && button.classList.add(className);
    if (className) {
        button.className = className;
    }
    container.appendChild(button);
    return button;
}
var container = document.createElement('div');
container.classList.add("calculator");
document.body.appendChild(container);
var output = document.createElement('div');
output.classList.add('output');
var span = document.createElement('span');
span.textContent = '0';
output.appendChild(span);
container.appendChild(output);
container.addEventListener('click', function (event) {
    console.log(event.target);
    if (event.target instanceof HTMLButtonElement) {
        var button = event.target;
        var text = button.textContent;
        console.log(button);
        if ('0123456789'.indexOf(text) >= 0) {
        }
        else if ('+-x÷'.indexOf(text) >= 0) {
        }
        else {
        }
    }
    else {
    }
});
var keys = [
    ['Clear', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['0', '.', '=']
];
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
    container.appendChild(div);
});
