const initialState = {
    load: [],
    show: true
}

const reducer = (state = initialState, action) => {
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

