import { 
    FETCH_PHONES_START,
    FETCH_PHONES_SSUCCESS,
    FETCH_PHONES_FAILURE, 
    LOAD_MORE_PHONES_START,
    LOAD_MORE_PHONES_SSUCCESS,
    LOAD_MORE_PHONES_FAILURE 
} from "../actionTypes";
import { 
    fetchPhones as fetchPhonesApi,
    loadMorePhones as loadMorePhonesApi
 } from "../api/index";
import {getRenderedPhonesLength} from "../selectors";


export const fetchPhones = () => async dispatch => {
    dispatch({ type: FETCH_PHONES_START})

    try {
        const phones = await fetchPhonesApi()
        dispatch({
            type: FETCH_PHONES_SSUCCESS,
            payload: phones 
        })
    } catch (err) {
        dispatch({
            type: FETCH_PHONES_FAILURE,
            payload: err,
            error: true
        })
    }   
}
export const loadMorePhones = () => async (dispatch, getState) => {
    const offset = getRenderedPhonesLength(getState())
    dispatch({ type: LOAD_MORE_PHONES_START})

    try {
        const phones = await loadMorePhonesApi({offset})
        dispatch({
            type: LOAD_MORE_PHONES_SSUCCESS,
            payload: phones 
        })
    } catch (err) {
        dispatch({
            type: LOAD_MORE_PHONES_FAILURE,
            payload: err,
            error: true
        })
    }   
}

