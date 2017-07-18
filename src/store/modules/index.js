/**
 * Created by hotread on 2017/6/12.
 */

import * as types from '../mutaion-types';

const state={
   list:[],
   fetching:true
}

const mutations={
    [types.FETCH_INDEX_LIST](state,payload){
        state.fetching=false;
        state.list=payload;
    }
}

export default {
    state,
    mutations
}