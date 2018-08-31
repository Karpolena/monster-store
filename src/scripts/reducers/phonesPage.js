import * as R from "ramda";

import { 
    FETCH_PHONES_SUCCESS,
    LOAD_MORE_PHONES_SUCCESS,
    SEARCH_PHONE
 } from "../actionTypes";
 

const initialState = {
    ids: [],
    search: ""
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

    const searchForm = (state, payload) => {
        return R.merge(state, {
            search: payload
        })
    }


export default (state = initialState, {type, payload}) => {
    switch(type) {
        case FETCH_PHONES_SUCCESS:
            return idf(state, payload);
        case LOAD_MORE_PHONES_SUCCESS:
            return ids(state, payload);
        case SEARCH_PHONE:
            return searchForm(state, payload);        
        default: 
            return state
    }
}