import { InjectionKey } from "@vue/runtime-core";
import { createStore, useStore as baseUseStore } from "vuex";

import counter from "./modules/counter";

export const store = createStore({
  modules: {
    counter,
  },
});

export const key: InjectionKey<typeof store["state"]> = Symbol();

export function useStore(): typeof store {
  return baseUseStore(key);
}
