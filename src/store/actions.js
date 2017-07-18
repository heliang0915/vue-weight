/**
 * Created by hotread on 2017/6/12.
 */
import * as types from './mutaion-types';
import fetch from '../util/fetch';
import {conf} from '../../config';
let {port}=conf;
// port=4000;


console.log("port>>>>>"+port);

export const fetchIndexList=({commit})=>{
    console.log(`url>>>>http://localhost:${port}/data`);
    return fetch.get('http://localhost:'+port+'/data').then((res)=>res.data).then((data)=>{
        console.log("data>>"+data);
        commit(types.FETCH_INDEX_LIST,data)
    });
}



