<template>
  <article>
    <h1>{{ post?.title }}</h1>
    <section>{{ post?.body }}</section>
  </article>

  <section>
    <h2>Comments</h2>
    <ul>
      <li
        v-for="item of comments"
        :key="item.id"
      >
        <div class="text">
          {{ item.name }} <span class="email">({{ item.email }})</span>
        </div>
        <div class="text">
          {{ item.body }}
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import { useStore } from "@/store/index";

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      post: computed(() => store.state.post.post),
      comments: computed(() => store.state.post.comments),
      getPost: (postId: string) =>
        store.dispatch("post/getPost", {
          postId,
        }),
    };
  },
  created() {
    const postId = this.$route.params.postId as string;
    this.getPost(postId);
  },
});
</script>

<style scoped>
section {
  margin-top: 50px;
}

ul {
  width: 600px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  flex-direction: column;
}

div {
  text-align: start;
}

.email {
  color: grey;
}
</style>
