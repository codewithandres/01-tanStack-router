export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface TodoState {
    todoCount: number;
    todos: Todo[];
    completed: number;
    pending: number;
}
