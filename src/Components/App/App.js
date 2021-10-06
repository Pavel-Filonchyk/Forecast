import React, {useEffect} from 'react'
import {Route,  Switch} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Main from "../Main/Main"
import ForecastMinsk from "../Forecasts/ForecastMinsk"
import ForecastMoscow from '../Forecasts/ForecastMoscow'
import ForecastBratislava from '../Forecasts/ForecastBratislava'
import {getData} from '../../actions'

export default function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getData())
      }, [])
    const show = useSelector(state => state.show)
    return (
        <>
            <section className="main">{show ? <Main/> : null}</section>
            <Switch>
                <Route exact path="/Main" component={Main}/>
                <Route exact path="/Minsk" component={ForecastMinsk}/>
                <Route exact path="/Moscow" component={ForecastMoscow}/>
                <Route exact path="/Bratislava" component={ForecastBratislava}/>
            </Switch>
        </>
    )
}
