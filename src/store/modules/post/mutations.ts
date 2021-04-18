import type { MutationTree } from "vuex";

import * as mutationTypes from "./mutationTypes";
import type { State as S } from "./state";

export interface Mutations extends MutationTree<S> {
  [mutationTypes.SAVE_POST_DATA](
    state: S,
    payload: {
      post: S["post"];
    }
  ): void;
  [mutationTypes.SAVE_POST_COMMENT](
    state: S,
    payload: {
      comments: S["comments"];
    }
  ): void;
  [mutationTypes.CLEAR_DATA](state: S): void;
}

const mutation: Mutations = {
  [mutationTypes.SAVE_POST_DATA](state, payload) {
    state.post = payload.post;
  },
  [mutationTypes.SAVE_POST_COMMENT](state, payload) {
    state.comments = payload.comments;
  },
  [mutationTypes.CLEAR_DATA](state) {
    state.post = null;
    state.comments = [];
  },
};

export default mutation;
