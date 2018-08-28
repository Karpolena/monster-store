import { FETCH_PHONES_START, FETCH_PHONES_SSUCCESS, FETCH_PHONES_FAILURE } from "../actionTypes";
import { fetchPhones as fetchPhonesApi } from "../api/index";


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

