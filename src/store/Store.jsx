import reducer from "./reducer.js";
import { StoreContext } from "./store-context.js";

export default function StoreProvider({ children }) {
    const initialState = {};

    return (
        <StoreContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StoreContext.Provider>
    )
}