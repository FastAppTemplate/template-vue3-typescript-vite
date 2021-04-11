import { MutationTree } from "vuex";
import * as mutationTypes from "./mutationTypes";
import type { State as S } from "./state";

export interface Mutations extends MutationTree<S> {
  [mutationTypes.SAVE_COUNT](state: S, count: number): void;
}

const mutation: Mutations = {
  [mutationTypes.SAVE_COUNT](state, count) {
    state.count = count;
  },
};

export default mutation;
