<template>
  <div id="app">
    <div class="bg-main">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <todo-box></todo-box>
          </div>
          <div class="col-12 col-md-6">
            <div class="d-flex flex-column h-100 justify-content-center">
              <todo-item
                v-for="todo in todos"
                :key="todo.id"
                :id="todo.id"
                :title="todo.title"
                :caption="todo.caption"
                @completed="completedList($event)"
              ></todo-item>
            </div>
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
    todos() {
      return this.$store.getters.todos;
    }
  },
  methods: {
    ...mapMutations(["completedList"]),
  }
};
</script>
<style>
.bg-main {
  height: 100%;
  background: rgb(249, 100, 0);
  background: linear-gradient(
    90deg,
    rgb(255, 153, 0) 0%,
    rgb(255, 173, 49) 50%,
    rgb(255, 193, 99) 100%
  );
}
</style>
