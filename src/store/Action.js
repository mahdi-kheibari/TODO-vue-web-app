export const changeTodoTitle = (context, newTitle) => {
    context.commit("changeTodoTitle", newTitle);
};
export const changeTodoCaption = (context, newTitle) => {
    context.commit("changeTodoCaption", newTitle);
};
export const setTodos = (context, Todo) => {
    context.commit("setTodos", Todo);
};