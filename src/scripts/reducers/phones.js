import * as R from "ramda";

import { 
    FETCH_PHONES_SUCCESS,
    LOAD_MORE_PHONES_SUCCESS,
    FETCH_PHONE_BY_ID_SUCCESS
 } from "../actionTypes";
 
 
const initialState = {
    
}

const newValues = (state, payload) => {
    let newValues = R.indexBy(R.prop("id"), payload);
    return R.merge(state, newValues)
}

const moreValues = (state, payload) => {
    let moreValues = R.indexBy(R.prop("id"), payload);
    return R.merge(state, moreValues)
} 
const ass = (state, payload) => {
    return R.assoc(payload.id, payload, state)
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            return newValues(state, payload);
        case LOAD_MORE_PHONES_SUCCESS:
            return moreValues(state, payload);
        case FETCH_PHONE_BY_ID_SUCCESS:
            return ass(state, payload);
        default: 
            return state
    }
}