import { useContext } from 'react';
import { TodoContex } from '../context/TodoContex';

export const useTodo = () => {
    const { todoState, toggleTodo } = useContext(TodoContex);
    const { todos } = todoState;

    return {
        todos: todoState.todos,
        pendingTodo: todos.filter(todo => !todo.completed),
        toggleTodo,
    };
};
