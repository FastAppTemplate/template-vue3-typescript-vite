import { ActionContext, ActionTree } from "vuex";

import type { State as RootState } from "@/store/root";
import * as mutationTypes from "./mutationTypes";
import type { Mutations } from "./mutations";
import type { State } from "./state";

interface Context extends ActionContext<State, RootState> {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
}

interface Actions extends ActionTree<State, RootState> {
  getPost(
    { commit, rootState }: Context,
    payload: {
      postId: string;
    }
  ): void;
}

const actions: Actions = {
  getPost({ commit }, payload) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${payload.postId}`)
      .then((response) => response.json())
      .then((json) => {
        commit(mutationTypes.SAVE_POST_DATA, {
          post: json as State["post"],
        });
      });

    fetch(
      `https://jsonplaceholder.typicode.com/posts/${payload.postId}/comments`
    )
      .then((response) => response.json())
      .then((json) => {
        commit(mutationTypes.SAVE_POST_COMMENT, {
          comments: json as State["comments"],
        });
      });
  },
};

export default actions;
