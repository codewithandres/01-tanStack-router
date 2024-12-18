import { Title } from './components/Title';
import { TodoList } from './components/TodoList';
import { TodoProvaider } from './context/TodoProvaider';

export const Todo = () => {
    return (
        <>
            <TodoProvaider>
                <Title />
                <div className='w-[500px] border shadow-sm m-auto mt-10 mb-0'>
                    <TodoList />
                </div>
            </TodoProvaider>
        </>
    );
};
