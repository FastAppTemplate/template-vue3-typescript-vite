<template>
  <article>
    <h1 />
    <section />
  </article>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  created() {
    console.log(this.$route.params.postId);
  },
});
</script>

<style>
</style>
