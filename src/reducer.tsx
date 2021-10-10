import {ActionTypes} from "./actions"
const initialState = {
    cities: [["Minsk", "BY"], ["Moscow", "RU"], ["London", "UK"], ["Madrid", "ES"]],
    load: [],
    show: true,
    items: []
}
export type InitialStateType = typeof initialState 
const reducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type){ 
        case 'LOADER':
        return {
            ...state,
            load: action.payload 
        }
        case 'CLOSE_MAIN':
        return {
            ...state,
            show: false 
        }
        case 'SHOW_MAIN':
        return {
            ...state,
            show: true 
        }
        case 'PUSH_ITEMS':
        return {
            ...state,
            items: action.payload 
        }
        default: 
        return state;  
    }
}
export default reducer;

