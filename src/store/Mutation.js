export const changeTodoTitle = (state, newTitle) => {
    state.todoTitle = newTitle;
};
export const changeTodoCaption = (state, newTitle) => {
    state.todoCaption = newTitle;
};
export const setTodos = (state, newTodo) => {
    state.todos = [...state.todos,newTodo];
};