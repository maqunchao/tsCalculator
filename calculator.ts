{
//创建按钮
function createButton(text:string | number, container:HTMLElement, className?:string):HTMLButtonElement{
    let button:HTMLButtonElement = document.createElement('button')
    button.textContent = text.toString();
    
    // className && button.classList.add(className);
    if(className){
        button.className = className;
    }
    
    container.appendChild(button);

    return button;
}

//创建整个容器
let container:HTMLDivElement = document.createElement('div');
container.classList.add("calculator");
document.body.appendChild(container);

//创建output输出行
let output:HTMLDivElement = document.createElement('div');
output.classList.add('output');
let span:HTMLSpanElement = document.createElement('span');
span.textContent = '0'
output.appendChild(span);
container.appendChild(output);

let n1:number;
let n2:number;
let operator: string;

//监听容器的点击
container.addEventListener('click', (event)=>{
    console.log("12");
    
    if(event.target instanceof HTMLButtonElement){
        let button:HTMLButtonElement = event.target;
        let text:string | number  = button.textContent;
        if('0123456789'.indexOf(text) >= 0) {
        
        //判断操作符
         if(operator){
             //更新n2
            if(n2){
                n2 = parseInt(n2.toString() + text);
             } else {
                n2 = parseInt(text)
            }
            span.textContent = n2.toString();
         } else {
             //没有操作符,更新n1
            if(n1){
                n1 = parseInt(n1.toString() + text);
             } else {
                 n1 = parseInt(text)
            }
            span.textContent = n1.toString();

         }
        
        } else if('+-x÷'.indexOf(text) >= 0){
            //更新操作符
            operator = text;
        }else if ('='.indexOf(text) >= 0){
            //计算结果
            let result;
            if(operator === '+'){
                result = n1 + n2;
            } else if (operator === '-'){
                result = n1 - n2;
            } else if (operator === 'x'){
                result = n1 * n2;
            } else if (operator === '÷'){
                result = n1 / n2;
            }
            span.textContent = result.toString() ;
        }
        console.log(n1, operator, n2);
        
    } else {

    }
    
})

//声明所有按钮
let keys: Array<Array<string>> = [
    ['Clear', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
];

//将按钮加入到container中
keys.forEach((textList:Array< number | string>)=>{
    let div:HTMLDivElement = document.createElement('div');
    div.classList.add('row')
    textList.forEach((text:number | string)=>{
       let button:HTMLButtonElement = createButton(text, div, `button text-${text}`);
    
    //不给每个按钮添加监听器, 给整个容器添加监听器
    //    button.addEventListener('click', (event)=>{
    //         console.log(event.target);
            
    //    })


    })
    container.appendChild(div);
})

}