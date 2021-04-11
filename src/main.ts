import { createApp } from "vue";
import "normalize.css";

import router from "./router";
import { store, key } from "./store";

import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.use(store, key);

app.mount("#app");
