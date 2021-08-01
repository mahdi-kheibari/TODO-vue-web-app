export const changeTodoTitle = (state, newTitle) => {
    state.todoTitle = newTitle;
};
export const changeTodoCaption = (state, newTitle) => {
    state.todoCaption = newTitle;
};
export const setTodos = (state, newTodo) => {
    state.todos = [...state.todos, newTodo];
    state.uncompletedTodo=[...state.uncompletedTodo, newTodo]
    state.todoTitle = "";
    state.todoCaption = "";
};
export const deleteTodo = (state, id) => {
    state.todos = state.todos.filter((item) => item.id !== id);
    state.completedTodo = state.completedTodo.filter((item) => item.id !== id);
    state.uncompletedTodo = state.uncompletedTodo.filter((item) => item.id !== id);
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
    state.uncompletedTodo=state.uncompletedTodo.map((item) => {
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
export const completedList=(state,info)=>{
    info.complete=!info.complete;
    if (info.complete===true) {
        state.completedTodo = [
        ...state.completedTodo,
        { title: info.title, caption: info.caption, id: info.id,complete:info.complete }
      ];
      state.uncompletedTodo=state.uncompletedTodo.filter((item)=>item.id!==info.id);
      state.todos[state.todos.findIndex((item)=>item.id===info.id)].complete=true;
    } else {
        state.completedTodo = state.completedTodo.filter(
        item => item.id !== info.id
      );
      state.uncompletedTodo = [
        ...state.uncompletedTodo,
        { title: info.title, caption: info.caption, id: info.id,complete:info.complete }
      ];
      state.todos[state.todos.findIndex((item)=>item.id===info.id)].complete=false;
    };   
};
export const changeViewTodos = (state, mode) => {
    state.viewTodos = mode;
};