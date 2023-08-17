const todoList=[ ];

renderTodoList();

function renderTodoList(){

    let todoListHTML='';

    todoList.forEach((todoObject, index)=>{
        
        const{name}=todoObject; // const name=todoObject.name;[destructuring...when have same name of the object as the variable ]
        const{dueDate}=todoObject;// const dueDate=todoObject.dueDate;[destructuring...when have same name of the object as the variable ]
        // Short Form.... const{name,dueDate}=todoObject;
        const html=`
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-button js-delete-todo-button">Delete</button>`;
        todoListHTML+=html;
    });
    
    console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML=todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton,index)=>{
            deleteButton.addEventListener('click',()=>{
                todoList.splice(index, 1);
                renderTodoList()
            });
        });
}

document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
    addTodo();
});

function addTodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name=inputElement.value;

    const dateInputElement=document.querySelector('.js-due-date-input');
    const dueDate=dateInputElement.value;

    todoList.push({name,dueDate});
    // ShorHand Property when variable and property name is same.... todoList.push({name:name, dueDate:dueDate});
    console.log(todoList);
    
    inputElement.value='';

    renderTodoList();

}

