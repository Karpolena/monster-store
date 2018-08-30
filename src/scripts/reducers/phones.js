import { 
    FETCH_PHONES_SUCCESS,
    LOAD_MORE_PHONES_SUCCESS
 } from "../actionTypes";
import * as R from "ramda";
 
const initialState = [
    
]

const newValues = (state, payload) => {
    R.indexBy(R.prop("id"), payload)
    return R.merge(state, newValues)
}

const moreValues = (state, payload) => {
    R.indexBy(R.prop("id"), payload)
    return R.merge(state, moreValues)
} 

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_PHONES_SUCCESS:
            return newValues(state, payload);
        case LOAD_MORE_PHONES_SUCCESS:
            return moreValues(state, payload);
        default: 
            return state
    }
}