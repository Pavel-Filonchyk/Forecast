import {serverAPI} from './serverAPI'
import {InferActionTypes} from "./store"

export const getData = (cities: any) =>{
    return (dispatch: any) =>{
        serverAPI.getItems(cities)  
        .then((data) => dispatch(actions.loader(data)))
    }
}

export type ActionTypes = InferActionTypes<typeof actions>
export const actions = {
    loader: (data: any) => ({
        type: 'LOADER',
        payload: data 
    }as const),
    closeMain: () => ({
            type: 'CLOSE_MAIN'
    }as const),
    setShowMain: () => ({
        type: 'SHOW_MAIN'
    }as const),
    pushItems: (items: any) => ({
        type: 'PUSH_ITEMS',
        payload: items
    }as const)
}