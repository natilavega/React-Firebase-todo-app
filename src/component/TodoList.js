import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

const TodoList = ({ todos, deleteTodo }) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <ul id="todo" key={todo.id}>
                    <li onClick={() => { deleteTodo(todo.id) }}>{todo.content}</li>
                </ul>
            )
        })
    ) : (
            <div id="empty">
                <p>No hay tareas pendientes.</p>
                <div>
                    <FontAwesomeIcon icon={faClipboardCheck} />
                </div>
            </div>
        );

    return (
        <div>
            {todoList}
        </div>
    )
}

export default TodoList
