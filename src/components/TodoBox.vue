<template>
  <div>
    <div class="TodoBox d-flex align-items-center">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1 class="text-white mb-3"><span class="text-primary">TODO App</span> by Mahdi Kheibari</h1>
        <form action="" class="w-100">
          <input
            type="text"
            class="form-control"
            placeholder="Enter title of TODO"
            v-model="title"
          />
          <textarea
            cols="30"
            rows="10"
            class="form-control my-4"
            placeholder="Enter discription of your TODO"
            v-model="caption"
          >
          </textarea>
          <input v-if="submit==='Create'"
            type="submit"
            value="Create new TODO"
            @click.prevent="
              setTodos({
                title: title,
                caption: caption,
                id: $uuid.v4()
              })"
            class="btn btn-primary text-white align-self-start"
          />
          <input v-else
            type="submit"
            value="Change TODO"
            @click.prevent="
              changeTodo"
            class="btn btn-primary text-white align-self-start"
          />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
export default {
  computed: {
    title: {
      get() {
        return this.$store.getters.getTodoTitle;
      },
      set(value) {
        this.$store.commit("changeTodoTitle", value);
      }
    },
    caption: {
      get() {
        return this.$store.getters.getTodoCaption;
      },
      set(value) {
        this.$store.commit("changeTodoCaption", value);
      }
    },
    submit() {
      return this.$store.state.submitValue;
    }
  },
  methods: {
    ...mapActions(["setTodos"]),
    ...mapMutations(["changeTodo"])
  }
};
</script>
<style scoped>
.TodoBox {
  height: 100vh;
}
</style>
