import * as R from "ramda";

import { ADD_PHONE_TO_BASKET } from "../actionTypes";

const initialState = []

const addBasket = (state, payload) => {
    return R.append(payload, state)
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_PHONE_TO_BASKET:
            return addBasket(state, payload);
        default: 
            return state
    }
}