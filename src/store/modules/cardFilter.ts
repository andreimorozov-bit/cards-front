import { Module } from "vuex";
import { RootState } from "../types";
import { CardFilterState, StatusInterface } from "./cardFilter.type";
import { MutationTree } from "vuex";
import { ActionTree } from "vuex";
import { GetterTree } from "vuex";

const state: CardFilterState = {
  series: "",
  number: "",
  min_credit: "",
  max_credit: "",
  ordering: "series",
  status__in: "",
  status: {
    active: true,
    inactive: true,
    expired: false,
  },
};

const getters: GetterTree<CardFilterState, RootState> = {
  getCardFilterSeries(state) {
    return state.series;
  },
  getCardFilterNumber(state) {
    return state.number;
  },
  getCardFilterMinCredit(state) {
    return state.min_credit;
  },
  getCardFilterMaxCredit(state) {
    return state.max_credit;
  },
  getCardFilterOrdering(state) {
    return state.ordering;
  },
  getCardFilterStatusIn(state) {
    return state.status__in;
  },
  getCardFilterStatus(state) {
    return state.status;
  },
};

const mutations: MutationTree<CardFilterState> = {
  setCardFilterSeries(state, payload: string) {
    state.series = payload;
  },
  setCardFilterNumber(state, payload: string) {
    state.number = payload;
  },
  setCardFilterMinCredit(state, payload: string) {
    state.min_credit = payload;
  },
  setCardFilterMaxCredit(state, payload: string) {
    state.max_credit = payload;
  },
  setCardFilterOrdering(state, payload: string) {
    state.ordering = payload;
  },
  setCardFilterStatusIn(state, payload: string) {
    state.status__in = payload;
  },
  setCardFilterStatus(state, payload: StatusInterface) {
    state.status = payload;
  },
};

const actions: ActionTree<CardFilterState, RootState> = {
  setCardFilterSeries(context, payload: string) {
    context.commit("setCardFilterSeries", payload);
  },
  setCardFilterNumber(context, payload: string) {
    context.commit("setCardFilterNumber", payload);
  },
  setCardFilterMinCredit(context, payload: string) {
    context.commit("setCardFilterMinCredit", payload);
  },
  setCardFilterMaxCredit(context, payload: string) {
    context.commit("setCardFilterMaxCredit", payload);
  },
  setCardFilterOrdering(context, payload: string) {
    if (context.state.ordering === payload) {
      context.state.ordering = "-" + payload;
      context.commit("setCardFilterOrdering", "-" + payload);
      return;
    }
    context.commit("setCardFilterOrdering", payload);
  },
  setCardFilterStatusIn(context) {
    let status__in = "";
    let key: keyof typeof context.state.status;
    for (key in context.state.status) {
      if (context.state.status[key]) {
        if (status__in === "") {
          status__in = key.toString().toUpperCase();
        } else {
          status__in += "," + key.toString().toUpperCase();
        }
      }
    }
    context.commit("setCardFilterStatusIn", status__in);
  },
  setCardFilterStatus(context, payload: StatusInterface) {
    context.commit("setCardFilterStatus", payload);
    context.dispatch("setCardFilterStatusIn");
  },
};

export const cardFilter: Module<CardFilterState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
