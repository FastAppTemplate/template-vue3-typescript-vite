import type { InjectionKey } from "@vue/runtime-core";
import { createStore, useStore as baseUseStore, createLogger } from "vuex";
import type { Store } from "vuex";

import post, { State as PostState } from "./modules/post";

export interface RootState {
  post: PostState;
}

export const store = createStore({
  modules: {
    post,
  },
  plugins: process.env.NODE_ENV !== "production" ? [createLogger()] : [],
});

export const key: InjectionKey<RootState> = Symbol();

export function useStore(): Store<RootState> {
  return baseUseStore(key);
}
