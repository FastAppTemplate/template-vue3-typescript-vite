import type { InjectionKey } from "@vue/runtime-core";
import { createStore, useStore as baseUseStore } from "vuex";
import type { StoreOptions } from "vuex";

import { State as RootState } from "./root";
import counter from "./modules/post";

export const store: StoreOptions<RootState> = createStore({
  modules: {
    counter,
  },
});

export const key: InjectionKey<typeof store["state"]> = Symbol();

export function useStore(): typeof store {
  return baseUseStore(key);
}
