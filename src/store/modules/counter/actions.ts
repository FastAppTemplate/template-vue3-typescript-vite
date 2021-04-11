import { ActionContext, ActionTree } from "vuex";

import { State as RootState } from "@store/root";
import * as mutationTypes from "./mutationTypes";
import { Mutations } from "./mutations";
import { State } from "./state";

interface Context extends ActionContext<State, RootState> {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
}

interface Actions extends ActionTree<State, RootState> {
  [mutationTypes.SAVE_COUNT](
    { commit, rootState }: Context,
    count: number
  ): void;
}

const actions: Actions = {
  [mutationTypes.SAVE_COUNT]({ commit }, count) {
    commit(mutationTypes.SAVE_COUNT, count);
  },
};

export default actions;
