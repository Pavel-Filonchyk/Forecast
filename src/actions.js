import {serverAPI} from './serverAPI'
const getData = () =>{
    return (dispatch) =>{
        serverAPI.getItems()  
        .then((data) => dispatch(loader(data)))
       
    }
}
const loader = (data) => {
    return {
        type: 'LOADER',
        payload: data 
    } 
}
const closeMain = () => {
    return {
        type: 'CLOSE_MAIN'
    } 
}
const setShowMain = () => {
    return {
        type: 'SHOW_MAIN'
    } 
}
export {
    getData,
    closeMain,
    setShowMain
}