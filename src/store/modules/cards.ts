import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { RootState } from "../types";
import { CardsState } from "./cards.type";
import { getCardList } from "@/api/cards";
import { CardFilterInterface } from "@/types";

const state: CardsState = {
  cards: [],
};

const mutations: MutationTree<CardsState> = {
  setCards(state, payload) {
    state.cards = payload;
  },
};

const getters: GetterTree<CardsState, RootState> = {
  getCards(state) {
    return state.cards;
  },
};

const actions: ActionTree<CardsState, RootState> = {
  async setCards(context) {
    const cardFilterDto: CardFilterInterface = {
      series: context.rootGetters["cardFilter/getCardFilterSeries"],
      number: context.rootGetters["cardFilter/getCardFilterNumber"],
      min_credit: context.rootGetters["cardFilter/getCardFilterMinCredit"],
      max_credit: context.rootGetters["cardFilter/getCardFilterMaxCredit"],
      ordering: context.rootGetters["cardFilter/getCardFilterOrdering"],
      status__in: context.rootGetters["cardFilter/getCardFilterStatusIn"],
    };
    const data = await getCardList(cardFilterDto);

    context.commit("setCards", data);
  },
};

export const cards: Module<CardsState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
