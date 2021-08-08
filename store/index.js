export const state=()=>({
    todos:[],
    todoTitle:"",
    todoCaption:"",
    submitValue:"Create",
    changeId:"",
    completedTodo:[],
    uncompletedTodo:[],
    viewTodos:"All",
    edit:false
})
export const getters={
    todos(state){
        return state.todos;
    },
    completedTodo(state){
        return state.completedTodo;
    },
    uncompletedTodo(state){
        return state.uncompletedTodo;
    },
    viewTodos(state){
        return state.viewTodos;
    },
    getTodoTitle(state){
        return state.todoTitle;
    },
    getTodoCaption(state){
        return state.todoCaption;
    }
    
}
export const mutations={
    changeTodoTitle(state, newTitle){
        state.todoTitle = newTitle;
    },
    changeTodoCaption(state, newTitle){
        state.todoCaption = newTitle;
    },
    setTodos(state, newTodo){
        state.todos = [...state.todos, newTodo];
        state.uncompletedTodo=[...state.uncompletedTodo, newTodo]
        state.todoTitle = "";
        state.todoCaption = "";
    },
    deleteTodo(state, id){
        state.todos = state.todos.filter((item) => item.id !== id);
        state.completedTodo = state.completedTodo.filter((item) => item.id !== id);
        state.uncompletedTodo = state.uncompletedTodo.filter((item) => item.id !== id);
    },
    editTodo(state, todoInfo){
        state.todoTitle = todoInfo.title;
        state.todoCaption = todoInfo.caption;
        state.submitValue = "Change";
        state.changeId=todoInfo.id;
    },
    changeTodo(state){
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
    },
    completedList(state,info){
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
    },
    changeViewTodos(state, mode){
        state.viewTodos = mode;
    }
}
export const actions={
    changeTodoTitle(context, newTitle){
        context.commit("changeTodoTitle", newTitle);
    },
    changeTodoCaption(context, newTitle){
        context.commit("changeTodoCaption", newTitle);
    },
    setTodos(context, Todo){
        if (Todo.title!=="") {
            context.commit("setTodos", Todo);
        }
        else{
            alert("please enter a title for TODO");
        }
    }
}