import type { Todo, TodoState } from '../interfaces/interface';

type TodoAction =
    | { type: 'add-todo'; payload: Todo }
    | { type: 'togle-todo'; payload: { id: string } };

export const todoReducer = (
    state: TodoState,
    action: TodoAction
): TodoState => {
    if (action.type === 'add-todo') {
        return {
            ...state,
            todos: [...state.todos, action.payload],
        };
    }

    if (action.type === 'togle-todo') {
        return {
            ...state,
            todos: state.todos.map(({ ...todo }) => {
                if (todo.id.toString() === action.payload.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
        };
    }
    return state;
};
