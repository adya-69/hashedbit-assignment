//Write your code here

function submitfn(event) {
    event.preventDefault(); // Prevent form submission

    const input = document.querySelector('.todo-input');
    const task = input.value.trim();

    if (task) {
        addTask(task);
        input.value = ''; // Clear input field
    }
}

function addTask(task) {
    const todoList = document.querySelector('.todo-list');

    // Create elements
    const todoDiv = document.createElement('div');
    const todoItem = document.createElement('li');
    const completeButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    // Set class and text content
    todoItem.textContent = task;
    todoItem.classList.add('todo-item');

    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-btn');
    completeButton.addEventListener('click', toggleComplete);

    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('trash-btn');
    deleteButton.addEventListener('click', deleteTask);

    // Append elements to div
    todoDiv.appendChild(todoItem);
    todoDiv.appendChild(completeButton);
    todoDiv.appendChild(deleteButton);

    // Append div to todo list
    todoList.appendChild(todoDiv);
}

function toggleComplete(event) {
    const todoItem = event.target.previousElementSibling;
    todoItem.classList.toggle('completed');
}

function deleteTask(event) {
    const todoDiv = event.target.parentElement;
    todoDiv.remove();
}