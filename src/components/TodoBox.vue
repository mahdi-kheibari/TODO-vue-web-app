<template>
  <div>
    <div class="TodoBox d-flex align-items-center">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1 class="text-white mb-3">TODO app by Mahdi Kheibari</h1>
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
        >
        </textarea>
        <button class="btn btn-success text-white align-self-start">
          submit
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    title: {
      get() {
        return this.$store.getters.getInputTitle;
      },
      set(value) {
        this.$store.commit("changeInputTitle", value);
      }
    }
  }
};
</script>
<style scoped>
.TodoBox {
  height: 100vh;
}
</style>
