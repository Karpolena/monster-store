import * as R from "ramda";

import { 
    FETCH_CATEGORIES_SUCCESS
 } from "../actionTypes";

const initialState = {}

const newValues = (state, payload) => {
    let newValues = R.indexBy(R.prop("id"), payload);
    return R.merge(state, newValues)
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_CATEGORIES_SUCCESS:
            return newValues(state, payload);
        default:
            return state
    }
}