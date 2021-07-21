import Vue from 'vue';
import Vuex from 'vuex';
import agolia from "@/modules/agolia-search";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    packages: [],
    pageCounter: 0,
    searchQuery: "",
    currentPage: 0
  },
  getters: {
    getPackages(state){
      return state.packages;
    },
    getPageCounter(state){
      return state.pageCounter;
    },
    getSearchQuery(state){
      return state.searchQuery;
    }
  },
  actions: {
    async changeQuery({commit}, searchQuery){
      const response = await agolia(searchQuery, 0)
          .then(r => r.response)
          .catch((err) => {
            console.log(err);
          });
      //console.log(response);
      commit("UPDATE_PACKAGES", response.hits);
      commit("UPDATE_PAGE_COUNTER", response.nbPages);
      commit("UPDATE_SEARCH_QUERY", searchQuery)
    },

    async changeCurrentPage({commit, state}, pageNumber){
      const response = await agolia(state.searchQuery, pageNumber)
          .then(r => r.response)
          .catch((err) => {
            console.log(err);
          });
      //console.log(response);
      commit("UPDATE_PACKAGES", response.hits);
      commit("UPDATE_PAGE_COUNTER", response.nbPages);

    },
  },
  mutations: {
    UPDATE_PACKAGES(state, packages){
      state.packages = packages;
    },
    UPDATE_PAGE_COUNTER(state, pageCounter){
      state.pageCounter = pageCounter;
    },
    UPDATE_SEARCH_QUERY(state, searchQuery){
      state.searchQuery = searchQuery;
    }
  },
})
