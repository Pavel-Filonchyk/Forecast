import React, {useEffect} from 'react'
import {Route,  Switch} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Main from "../Main/Main"
import ForecastMinsk from "../Forecasts/ForecastMinsk"
import ForecastMoscow from '../Forecasts/ForecastMoscow'
import ForecastIbiza from '../Forecasts/ForecastIbiza'
import ForecastLondon from '../Forecasts/ForecastLondon'
import {getData} from '../../actions'
import {AppType} from '../../store'

export default function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getData())
      }, [])
    const show = useSelector((state: AppType)=> state.show)
    return (
        <>
            <section className="main">{show ? <Main/> : null}</section>
            <Switch>
                <Route exact path="/Main" component={Main}/>
                <Route exact path="/Minsk" component={ForecastMinsk}/>
                <Route exact path="/Moscow" component={ForecastMoscow}/>
                <Route exact path="/London" component={ForecastLondon}/>
                <Route exact path="/Ibiza" component={ForecastIbiza}/>
            </Switch>
        </>
    )
}
