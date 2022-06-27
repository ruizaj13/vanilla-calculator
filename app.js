//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterButton = document.querySelector('.filter-todo');

//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteAndCheck);
filterButton.addEventListener('click', filterTodo);

//Functions

function addTodo(event) {
    //prevents refreshing when clicked
    event.preventDefault();

    //Creates TODO Div
    const todoDiv = document.createElement('div');

    //adds 'todo' className
    todoDiv.classList.add('todo');

    //Creates li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    //Append To List
    todoList.appendChild(todoDiv);

    //Clear input
    todoInput.value = '';
};

function deleteAndCheck(event) {
    const item = event.target;

    if(item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;

        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    
    } else if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    };
};

function filterTodo(event) {
    //Selects all the children of the div
    const todos = todoList.childNodes;

    todos.forEach(todo => {
        switch(event.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if(!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        };
    });
};