import {ActionTypes} from "./actions"
const initialState = {
    load: [],
    show: true
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
        default: 
        return state;  
    }
}
export default reducer;

