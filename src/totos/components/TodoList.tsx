import { useTodo } from '../hooks/useTodo';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const { todos } = useTodo();

    return (
        <ul>
            {todos.map(todo => (
                <div className='mb-5 m-5' key={todo.id}>
                    <TodoItem todo={todo} />
                </div>
            ))}
        </ul>
    );
};
