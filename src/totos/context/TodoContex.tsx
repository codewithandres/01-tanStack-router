import { createContext } from 'react';
import type { TodoState } from '../interfaces/interface';

export type TodoContexProps = {
    todoState: TodoState;
    toggleTodo: (id: string) => void;
};

export const TodoContex = createContext<TodoContexProps>({} as TodoContexProps);
