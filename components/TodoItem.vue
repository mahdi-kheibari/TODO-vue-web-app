<template>
  <div>
    <div class="card my-4">
      <div class="card-header bg-title text-white">
        <div class="row no-gutters w-100 align-items-center">
          <h3 :class="['card-title', 'col-8', { completed: complete }]">
            {{ title }}
          </h3>
          <div
            class="col-3 offset-1 d-flex align-items-center justify-content-lg-around"
          >
            <b-icon
              :icon="checkCompleted"
              @click="completedList({complete:complete,title:title, caption:caption, id:id})"
              font-scale="1.8"
              class="text-white items-icon"
            ></b-icon>
            <b-icon
              icon="pencil-square"
              @click="editTodo({ title, caption, id })"
              font-scale="2"
              :class="['text-warning','items-icon',{forCompleted:complete}]"
            ></b-icon>
            <b-icon
              icon="trash"
              @click="deleteTodo(id)"
              font-scale="2"
              class="text-danger items-icon"
            ></b-icon>
          </div>
        </div>
      </div>
      <div class="card-body">
        <p :class="{ completed: complete }">
          {{ caption }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: {
    title: String,
    caption: String,
    id: String,
    complete:Boolean
  },
  methods: {
    ...mapMutations(["deleteTodo"]),
    ...mapMutations(["editTodo"]),
    ...mapMutations(["changeItemInfo"]),
    ...mapMutations(["todoCompleted"]),
    ...mapMutations(["completedList"])
  },
  computed: {
    checkCompleted() {
      if (this.complete) {
        return "check-square-fill";
      } else {
        return "check-square";
      }
    },
    viewTodos() {
      return this.$store.getters.viewTodos;
    },
  },
};
</script>
<style scoped>
.bg-title {
  background: rgb(0, 8, 57);
  background: linear-gradient(
    90deg,
    rgba(0, 8, 57, 1) 0%,
    rgba(0, 80, 130, 1) 50%,
    rgba(0, 168, 204, 1) 100%
  );
}
.items-icon {
  cursor: pointer;
}
.completed {
  color: gray;
  text-decoration: line-through;
}
.forCompleted{
    color:lightgrey !important;
    pointer-events: none;
}
</style>
