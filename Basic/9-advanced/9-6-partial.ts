{
    type ToDo = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low';
    };

    function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
        return {...todo, ...fieldsToUpdate}; // 기존의 todo에 fieldsToUpdate를 덮어씌운다
    }

    const todo: ToDo = {
        title: 'learn TypeScript',
        description: 'study hard',
        label: 'study',
        priority: 'high',
    };
    const updated = updateTodo(todo, { priority: 'low' });
    console.log(updated);
}