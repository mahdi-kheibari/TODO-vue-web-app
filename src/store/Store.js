import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from "./Action";
import * as getters from "./Getter";
import * as mutations from "./Mutation";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todos:[],
        todoTitle:"",
        todoCaption:""
    },
    actions,
    getters,
    mutations
})