import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Posts from "./pages/Posts.vue";
import Post from "./pages/Post/index.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/posts",
    component: Posts,
  },
  {
    path: "/post/:postId",
    component: Post,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
