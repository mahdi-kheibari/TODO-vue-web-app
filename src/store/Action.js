export const changeTodoTitle = (context, newTitle) => {
    context.commit("changeTodoTitle", newTitle);
};
export const changeTodoCaption = (context, newTitle) => {
    context.commit("changeTodoCaption", newTitle);
};
export const setTodos = (context, Todo) => {
    if (Todo.title!=="") {
        context.commit("setTodos", Todo);
    }
    else{
        alert("please enter a title for TODO");
    }
};