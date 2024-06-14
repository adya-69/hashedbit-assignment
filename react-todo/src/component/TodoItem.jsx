import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={toggleTodo}>{todo.text}</span>
            <button onClick={deleteTodo}>Delete</button>
        </li>
    );
};

export default TodoItem;