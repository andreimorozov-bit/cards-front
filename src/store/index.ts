import { createStore } from "vuex";
import { RootState } from "./types";
import { cardFilter } from "./modules/cardFilter";
import { cards } from "./modules/cards";

const state: RootState = {
  helloMessage: "Hello from state",
};

export default createStore({
  modules: {
    cardFilter,
    cards,
  },
  state,
  mutations: {},
  actions: {},
});
