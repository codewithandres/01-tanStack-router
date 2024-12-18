import { Button } from './components/ui/button';
import { Todo } from './totos/Todo';

const App = () => {
    return (
        <div className='flex h-screen w-screen flex-col'>
            <div className='flex h-full w-full flex-row'>
                <div className='flex h-full w-full flex-col overflow-y-auto bg-muted/40'>
                    <div className='flex h-full w-full flex-col p-4'>
                        <div className='flex h-full w-full flex-col rounded-lg border bg-background p-4'>
                            <Todo />
                            <Button variant={'outline'} className='m-5'>
                                Rutas
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
