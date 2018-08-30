import { 
    FETCH_PHONES_SUCCESS,
    LOAD_MORE_PHONES_SUCCESS
 } from "../actionTypes";
 import * as R from "ramda";

const initialState = {
    ids: [
    
    ]
}

    const idf = (state, payload) => {
        return R.merge(state, {
            ids: R.pluck("id", payload)
        })
    } 

    const ids = (state, payload) => {
        let ids = R.pluck("id", payload);
        return R.merge(state, {
            ids: R.concat(state.ids, ids)
        })
    }


export default (state = initialState, {type, payload}) => {
    switch(type) {
        case FETCH_PHONES_SUCCESS:
            return idf(state, payload);
        case LOAD_MORE_PHONES_SUCCESS:
            return ids(state, payload);            
        default: 
            return state
    }
}