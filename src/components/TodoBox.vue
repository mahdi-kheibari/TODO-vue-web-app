<template>
  <div>
    <div class="TodoBox d-flex align-items-center">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1 class="text-white mb-3">TODO app by Mahdi Kheibari</h1>
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
          <input
            type="submit"
            value="Creat new TODO"
            @click.prevent="
              setTodos({
                title:title,
                caption:caption,
                id:$uuid.v4()
              })"
            class="btn btn-success text-white align-self-start"
          />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
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
    }
  },
  methods: {
    ...mapActions(["setTodos"]),
  }
};
</script>
<style scoped>
.TodoBox {
  height: 100vh;
}
</style>
