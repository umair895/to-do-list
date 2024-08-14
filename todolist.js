// global variable to store tasks
let todoArr = JSON.parse(localStorage.getItem('todoArr')) || [
    {
         item : 'buy milk',
         date : '12/12/2024',
    }
];
displayItem();
// JSON.parse(localStorage.getItem(todoArr));


let input = document.querySelector('.input');
let btn = document.querySelector('.add');
let date = document.querySelector('.date');

btn.addEventListener('click',clicked);

function clicked(){
    let todo = input.value;
    let dateElement = date.value;
    if(todo && dateElement){
        todoArr.push({item : todo, date : dateElement});
        displayItem();
        input.value = '';
        date.value = '';
        localStorage.setItem('todoArr',JSON.stringify(todoArr));
    }else if(todo){
        alert('please enter date');
    }else{
        alert('please enter todo');
    }
}

function displayItem(){
    let displaycontainer =document.querySelector('.todo-container');
    let newHtml = '';
    for(let i = 0; i < todoArr.length; i++){
        // let item = todoArr[i].item;
        // let date = todoArr[i].date;
        // objech destructuring
        let {item,date} = todoArr[i];
        newHtml +=`
        <div class="line">
        <span>${item}</span>
        <span>${date}</span>
        <button class="del" onclick="deleteItem(${i});">delet</button>
        <div/>`;
        
    }
    displaycontainer.innerHTML = newHtml ;
}

function deleteItem(index) {
    todoArr.splice(index, 1);
    displayItem();
    localStorage.setItem('todoArr', JSON.stringify(todoArr));
  }