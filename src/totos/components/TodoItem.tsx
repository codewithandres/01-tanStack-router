import { Button } from '@/components/ui/button';
import type { Todo } from '../interfaces/interface';
import { useTodo } from '../hooks/useTodo';

interface TodoItemProps {
    todo: Todo;
}

export const TodoItem = ({ todo: { text, id, completed } }: TodoItemProps) => {
    const { toggleTodo } = useTodo();

    const handlerClick = () => toggleTodo(id.toString());

    return (
        <div className='flex justify-between gap-5 items-center text-xl text-balance'>
            <li className={completed ? 'text-indigo-300' : ''}>{text}</li>
            <Button
                key={id}
                variant={completed ? 'secondary' : 'default'}
                size={'sm'}
                onClick={handlerClick}>
                completado: {completed ? 'si' : 'no'}
            </Button>
        </div>
    );
};
