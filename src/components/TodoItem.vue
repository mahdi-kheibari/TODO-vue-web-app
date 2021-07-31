<template>
  <div>
    <div class="card my-4">
      <div class="card-header bg-title text-white">
        <div class="row no-gutters w-100 align-items-center">
          <h3 :class="['card-title', 'col-8', { completed: completed }]">
            {{ title }}
          </h3>
          <div
            class="col-3 offset-1 d-flex align-items-center justify-content-lg-around"
          >
            <b-icon
              :icon="checkCompleted"
              @click="handleCompleted"
              font-scale="1.8"
              class="text-white items-icon"
            ></b-icon>
            <b-icon
              icon="pencil-square"
              @click="editTodo({ title, caption, id })"
              font-scale="2"
              :class="['text-warning','items-icon',{forCompleted:completed}]"
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
        <p :class="{ completed: completed }">
          {{ caption }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      completed: false
    };
  },
  props: {
    title: String,
    caption: String,
    id: String
  },
  methods: {
    ...mapMutations(["deleteTodo"]),
    ...mapMutations(["editTodo"]),
    ...mapMutations(["changeItemInfo"]),
    ...mapMutations(["todoCompleted"]),
    handleCompleted() {
      this.completed = !this.completed;
      this.$emit("completed",{completed:this.completed,title: this.title, caption: this.caption, id: this.id})
    }
  },
  computed: {
    checkCompleted() {
      if (this.completed) {
        return "check-square-fill";
      } else {
        return "check-square";
      }
    },
  }
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
