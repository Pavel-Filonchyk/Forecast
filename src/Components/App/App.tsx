import React, {useEffect} from 'react'
import {Route,  Switch} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Main from "../Main/Main"
import Cities from '../Forecasts/Cities'
import FoundCity from "../Forecasts/FoundCity"
import {AppType} from '../../store'

export default function App() {
    
    const show = useSelector((state: AppType)=> state.show)
    return (
        <>
            <section className="main">{show ? <Main/> : null}</section>
            <Switch>
                <Route exact path="/Main" component={Main}/>
                <Route exact path="/Cities" component={Cities}/>
                <Route exact path="/FoundCity" component={FoundCity}/>
            </Switch>
        </>
    )
}
