export const changeTodoTitle = (state, newTitle) => {
    state.todoTitle = newTitle;
};
export const changeTodoCaption = (state, newTitle) => {
    state.todoCaption = newTitle;
};
export const setTodos = (state, newTodo) => {
    state.todos = [...state.todos, newTodo];
    state.todoTitle = "";
    state.todoCaption = "";
};
export const deleteTodo = (state, id) => {
    state.todos = state.todos.filter((item) => item.id !== id);
};
export const editTodo = (state, todoInfo) => {
    state.todoTitle = todoInfo.title;
    state.todoCaption = todoInfo.caption;
    state.submitValue = "Change";
    state.changeId=todoInfo.id;
};
export const changeTodo = (state) => {
    state.todos=state.todos.map((item) => {
        if (item.id === state.changeId) {
            return {
                ...item,
                title: state.todoTitle,
                caption: state.todoCaption
            }
        }
        else {
            return {
                ...item
            }
        }
    });
    state.submitValue = "Create";
    state.todoTitle = "";
    state.todoCaption = "";
};