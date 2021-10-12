/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useMemo} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import './Main.scss' 
import findTemperature from '../../functions/forecastToday'
import {actions, getData} from '../../actions'
import {AppType} from '../../store'

export default function Main() {
  const load = useSelector((state: AppType) => state.load)
  const cities = useSelector((state: AppType) => state.cities)
  const dispatch = useDispatch()
  
  console.log(load[4])

  useEffect(() => {
      dispatch(getData(cities))
    }, [])
  
  const hideMain = (serverAPILine: number, chosedCity: string) => {
    dispatch(actions.closeMain())
    dispatch(actions.pushItems([serverAPILine, chosedCity]))
  }

  const nums = [0, 1, 2, 3]

  const temperatures = useMemo(() => 
    nums.map(item =>{
      return findTemperature(load[item])[0] 
    }), 
  [load])

  const pics = useMemo(() =>
    nums.map(item => {
      return `https://openweathermap.org/img/wn/${findTemperature(load[item])[1]}@2x.png`
    }),
  [load])
  
  return (
  <div className="weather-wrapper">
    <div className="weather-card">
      <div className="wrap_icon">
        <h1>{temperatures[0]}º</h1>
        <img style={{height: 65, width: 65, marginTop: 6}} src={pics[0]} alt=""/>
      </div>
      <h4>weather now</h4>
      <p>{cities[0][0]}</p>
      <Link to="/Cities/">
      <button style={{width: 80, height: 20, marginTop: 10, marginLeft:20, color: 'gray'}}
        onClick={()=>hideMain(4, cities[0][0])}
      >forecast</button>
      </Link>
    </div>
    <div className="weather-card">
      <div className="weather-icon cloud"></div>
      <div className="wrap_icon">
        <h1>{temperatures[1]}º</h1>
        <img style={{height: 65, width: 65, marginTop: 6}} src={pics[1]} alt=""/>
      </div>   
      <h4>weather now</h4>
      <p>{cities[1][0]}</p>
      <Link to="/Cities/">
        <button style={{width: 80, height: 20, marginTop: 10, marginLeft:20, color: 'gray'}}
          onClick={()=>hideMain(5, cities[1][0])}
        >forecast</button>
      </Link>
    </div>
    <div className="weather-card">
      <div className="weather-icon cloud"></div>
      <div className="wrap_icon">
      <h1>{temperatures[2]}º</h1>
      <img style={{height: 65, width: 65, marginTop: 6}} src={pics[2]} alt=""/>
    </div>   
      <h4>weather now</h4>
      <p>{cities[2][0]}</p>
      <Link to="/Cities/">
        <button style={{width: 80, height: 20, marginTop: 10, marginLeft:20, color: 'gray'}}
          onClick={()=>hideMain(6, cities[2][0])}
        >forecast</button>
      </Link>
    </div>
    <div className="weather-card">
      <div className="weather-icon cloud"></div>
      <div className="wrap_icon">
      <h1>{temperatures[3]}º</h1>
      <img style={{height: 65, width: 65, marginTop: 6}} src={pics[3]} alt=""/>
    </div>   
      <h4>weather now</h4>
      <p>{cities[3][0]}</p>
      <Link to="/Cities/">
        <button style={{width: 80, height: 20, marginTop: 10, marginLeft:20, color: 'gray'}}
          onClick={()=>hideMain(7, cities[3][0])}
        >forecast</button>
      </Link>
    </div>
  </div>
  )
}

  
