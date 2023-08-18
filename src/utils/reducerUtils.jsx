import {createContext, useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "TOKEN":
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

const initialState = {
    token: ""
}

export const AppContext = createContext({
    state: initialState,
    dispatch: () => null
});

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={[ state, dispatch ]}>
            { children }
        </AppContext.Provider>
    )
}

export const TOKEN = "TOKEN";