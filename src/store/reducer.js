import { AUTH_USER, LOG_OUT, SELECT_STOCK } from "./actions.js";

export default function reducer(state, { type, payload }) {
    switch(type) {
        case AUTH_USER:
            return {
                ...state,
                auth: {
                    currentUser: payload.data,
                    token: payload.token,
                    pending: false
                }
            };
        case LOG_OUT:
            return {
                ...state,
                auth: {
                    currentUser: null,
                    token: null,
                    pending: false
                }
            };
        case SELECT_STOCK:
            return {
                ...state,
                selectedStock: payload
            };
        default:
            return state;
    }
}