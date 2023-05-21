import {createContext, useReducer} from "react";

const initialState = {
    tableData: [],
    renderTable: false,
    result: {success: false, message: ''},
    loading: false,
    blank: true,
    renderResult: false,
}

type ACTIONTYPE =
    | {type: 'PAGE_LOAD'}
    | {type: 'MENU_CLICK'}
    | {type: 'SEARCH_CLICK'}
    | {type: 'API_SUCCESS'}

function globalReducer(state: typeof initialState, action: ACTIONTYPE) {
    switch (action.type) {
        case 'PAGE_LOAD':
        case 'MENU_CLICK':
            return {
                ...state,
                renderTable: false,
                tableData: [],
                blank: true,
                renderResult: false,
                result: {success: false, message: ''},
                loading: false
            }
        case 'SEARCH_CLICK':
            return {...state, loading: true, blank: false}
        case 'API_SUCCESS':
            return {...state, loading: false, renderTable: true}
        default:
            return state
    }
}

interface IGlobalState {
    menuClick: () => void,
    searchClick: () => void,
    apiSuccess: () => void
}

export const GlobalState = createContext<IGlobalState>({
    menuClick: () => undefined,
    searchClick: () => undefined,
    apiSuccess: () => undefined
})
GlobalState.displayName = 'GlobalState'

export const GlobalStateProvider = ({children}: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState)
    const value = {
        ...state,
        menuClick: () => dispatch({type: 'MENU_CLICK'}),
        searchClick: () => dispatch({type: 'SEARCH_CLICK'}),
        apiSuccess: () => dispatch({type: 'API_SUCCESS'})
    }
    return (
        <GlobalState.Provider value={value}>
            {children}
        </GlobalState.Provider>
    )
}