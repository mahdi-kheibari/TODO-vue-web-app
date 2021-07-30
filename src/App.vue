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
              <todo-item></todo-item>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoBox from "./components/TodoBox";
import TodoItem from "./components/TodoItem";
export default {
  data() {
    return {};
  },
  components: {
    "todo-box": TodoBox,
    "todo-item": TodoItem
  }
};
</script>
<style>
.bg-main {
  height: 100%;
  background: rgb(249, 100, 0);
  background: linear-gradient(90deg, rgba(249, 100, 0, 1) 0%, rgba(255, 89, 0, 1) 23%, rgba(255, 178, 0, 1) 100%);
}
  
</style>
