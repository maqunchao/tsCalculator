
function createButton(text:string, container:HTMLElement, className?:string){
    let button:HTMLButtonElement = document.createElement('button')
    button.textContent = text;
    
    // className && button.classList.add(className);
    if(className){
        button.className = className;
    }
    
    container.appendChild(button);

    return button;
}

let container:HTMLDivElement = document.createElement('div');
container.classList.add("calculator");
document.body.appendChild(container);

let output:HTMLDivElement = document.createElement('div');
output.classList.add('output');
let span:HTMLSpanElement = document.createElement('span');
span.textContent = '0'
output.appendChild(span);
container.appendChild(output);

container.addEventListener('click', (event)=>{
    console.log(event.target);
    if(event.target instanceof HTMLButtonElement){
        let button:HTMLButtonElement = event.target;
        let text:string | number  = button.textContent;
        console.log(button);
        if('0123456789'.indexOf(text) >= 0) {

        } else if('+-x÷'.indexOf(text) >= 0){

        }else{

        }
        
    } else {

    }
    
})


let keys: Array<Array<string>> = [
    ['Clear', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['0', '.', '=']
];

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