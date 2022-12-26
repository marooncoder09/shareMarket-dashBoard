import { useContext, useEffect } from "react";
import { LOG_OUT } from "../store/actions.js";
import { StoreContext } from "../store/store-context.js";

export default function useAuth() {
    const [state, dispatch] = useContext(StoreContext);

    const logout = () => {
        dispatch({
            type: LOG_OUT
        });
    };

    return {
        ...state.auth,
        logout
    };
}