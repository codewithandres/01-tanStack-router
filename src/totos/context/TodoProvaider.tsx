import type React from 'react';
import { TodoContex } from './TodoContex';
import type { TodoState } from '../interfaces/interface';
import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: TodoState = {
    todoCount: 0,
    todos: [
        {
            id: 1,
            text: 'Aprender React',
            completed: false,
        },
        {
            id: 2,
            text: 'Aprender React con typeScript',
            completed: false,
        },
        {
            id: 3,
            text: 'Aprender React con typeScript y Redux',
            completed: false,
        },
        {
            id: 4,
            text: 'Aprender React con typeScript y Redux y React Router',
            completed: false,
        },
        {
            id: 5,
            text: 'Aprender React con typeScript y Redux y React Router y Tailwind',
            completed: false,
        },

        {
            id: 7,
            text: 'Aprender React con typeScript y Redux y React Router y Tailwind y React Query y React Hook Form',
            completed: false,
        },
    ],
    completed: 0,
    pending: 0,
};

interface TodoProbaiderPros {
    children: React.ReactNode;
}
export const TodoProvaider = ({ children }: TodoProbaiderPros) => {
    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const toggleTodo = (id: string) => {
        dispatch({ type: 'togle-todo', payload: { id } });
    };

    return (
        <TodoContex.Provider value={{ todoState, toggleTodo }}>
            {children}
        </TodoContex.Provider>
    );
};
