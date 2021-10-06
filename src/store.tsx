import {applyMiddleware, createStore} from 'redux'
import reducer from './reducer'
import thunkMiddleware from 'redux-thunk'


const store = createStore(reducer, applyMiddleware(thunkMiddleware))

type ReducerType = typeof reducer      
export type AppType = ReturnType<ReducerType> 

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : any 
export type InferActionTypes<T extends {[key: string]: (...arg: any[]) => any}> = ReturnType<PropertiesType<T>>

export default store