<template>
  <div class="container">
    <h1>Posts</h1>
    <ul>
      <li
        v-for="{ id, title } of postListData"
        :key="id"
      >
        <router-link :to="`/post/${id}`">
          {{ title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type PostListData = {
  userId: number;
  id: number;
  title: string;
}[];

interface Data {
  postListData: PostListData;
}
export default defineComponent({
  data(): Data {
    return {
      postListData: [],
    };
  },
  created() {
    this.fetchPostList();
  },
  methods: {
    fetchPostList() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          this.postListData = json;
        });
    },
  },
});
</script>

<style scoped>
.container {
  width: 960px;
  margin: 0 auto;
}

ul {
  padding: 0px;
  margin-top: 20px;
  list-style: none;
}

li {
  margin-bottom: 20px;
}
</style>
