import { AUTH_USER, LOG_OUT } from "./actions.js";

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
            }
        default:
            return state;
    }
}