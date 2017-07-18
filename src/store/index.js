/**
 * vuex store
 */
import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules/index';
import * as actions from './actions';
import * as  getters from './getters';

Vue.use(Vuex);
var store=new Vuex.Store({
    modules:{
      index
    },
    actions,
    getters
})


export default  store;