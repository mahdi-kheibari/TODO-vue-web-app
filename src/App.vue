<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <todo-box></todo-box>
        </div>
        <div class="col-12 col-md-6">
          <div class="w-100 position-relative todoMode">
            <b-dropdown
              :text="viewTodos"
              variant="light"
              menu-class="w-100"
              class="w-100 position-absolute"
            >
              <b-dropdown-item @click="changeViewTodos('All')"
                >All</b-dropdown-item
              >
              <b-dropdown-item @click="changeViewTodos('Uncompleted')"
                >Uncompleted</b-dropdown-item
              >
              <b-dropdown-item @click="changeViewTodos('Completed')"
                >Completed</b-dropdown-item
              >
            </b-dropdown>
          </div>

          <div class="d-flex flex-column h-100 justify-content-center">
            <todo-item
              v-for="todo in todoList"
              :key="todo.id"
              :id="todo.id"
              :title="todo.title"
              :caption="todo.caption"
              :complete="todo.complete"
            ></todo-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import TodoBox from "./components/TodoBox";
import TodoItem from "./components/TodoItem";
export default {
  data() {
    return {};
  },
  components: {
    "todo-box": TodoBox,
    "todo-item": TodoItem
  },
  computed: {
    viewTodos() {
      return this.$store.getters.viewTodos;
    },
    todos() {
      return this.$store.getters.todos;
    },
    completedTodo() {
      return this.$store.getters.completedTodo;
    },
    uncompletedTodo() {
      return this.$store.getters.uncompletedTodo;
    },
    todoList() {
      if (this.$store.state.viewTodos === "All") {
        return this.todos;
      }
      if (this.$store.state.viewTodos === "Uncompleted") {
        return this.uncompletedTodo;
      }
      if (this.$store.state.viewTodos === "Completed") {
        return this.completedTodo;
      }
    }
  },
  methods: {
    ...mapMutations(["changeViewTodos"])
  }
};
</script>
<style>
body {
  background: rgb(249, 100, 0);
  background: linear-gradient(
    90deg,
    rgb(255, 153, 0) 0%,
    rgb(255, 173, 49) 50%,
    rgb(255, 193, 99) 100%
  );
}
.todoMode {
  min-height: 2.5rem;
  z-index: 10;
}
.btn-light {
  border-top: hidden;
}
</style>
