import { useTodo } from '../hooks/useTodo';

export const Title = () => {
    const { pendingTodo } = useTodo();
    return (
        <h1 className='text-5xl text-center font-bold'>
            Todos: {pendingTodo.length}
        </h1>
    );
};
