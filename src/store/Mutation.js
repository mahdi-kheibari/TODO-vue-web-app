export const changeTodoTitle = (state, newTitle) => {
    state.todoTitle = newTitle;
};
export const changeTodoCaption = (state, newTitle) => {
    state.todoCaption = newTitle;
};
export const setTodos = (state, newTodo) => {
    state.todos = [...state.todos,newTodo];
    state.todoTitle="";
    state.todoCaption="";
};
export const deleteTodo = (state, id) => {
    state.todos=state.todos.filter((item)=>item.id!==id);
};