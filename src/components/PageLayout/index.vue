<template>
  <Header />
  <slot />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./Header.vue";
export default defineComponent({
  components: {
    Header,
  },
});
</script>

<style scoped>
</style>
