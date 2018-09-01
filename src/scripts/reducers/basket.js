import * as R from "ramda";

import { 
    ADD_PHONE_TO_BASKET,
    REMOVE_PHONE_FROM_BASKET,
    CLEAN_BASKET
 } from "../actionTypes";

const initialState = []

const addBasket = (state, payload) => {
    return R.append(payload, state)
}

const removeBasket = (state, payload) => {
    return R.without(R.of(payload), state)
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_PHONE_TO_BASKET:
            return addBasket(state, payload);
        case REMOVE_PHONE_FROM_BASKET:
            return removeBasket(state, payload);
        case CLEAN_BASKET:
            return []
        default: 
            return state
    }
}