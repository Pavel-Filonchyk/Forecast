import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import './Main.scss' 
import findItems from '../findeItems'
import {closeMain} from '../../actions'

export default function Main() {

  const dispatch = useDispatch()
  const load = useSelector(state => state.load)
  console.log(load)

  const hideMain = () => {
    dispatch(closeMain())
  }
  
  let values1 = findItems(load[0]).flat().flat()
  let values2 = findItems(load[1]).flat().flat()
  let values3 = findItems(load[2]).flat().flat()
  
  let name1 = values1.find(item => item === "Minsk")
  let name2 = values2.find(item => item === "Moscow")
  let name3 = values3.find(item => item === "Bratislava")

  const temp1 = Math.round(values1[7] - 273)
  const temp2 = Math.round(values2[7] - 273)
  const temp3 = Math.round(values3[7] - 273)
  
  const pic1 = `https://openweathermap.org/img/wn/${values1[5]}@2x.png`
  const pic2 = `https://openweathermap.org/img/wn/${values2[5]}@2x.png`
  const pic3 = `https://openweathermap.org/img/wn/${values2[5]}@2x.png`
  return (
  <div className="weather-wrapper">
    <div className="weather-card">
      <div className="weather-icon sun"></div>
        <div className="wrap_icon">
          <h1>{temp1}º</h1>
          <img style={{height: 65, width: 65, marginTop: 6}} src={pic1} alt=""/>
        </div>
        <h4>weather now</h4>
        <p>{name1}</p>
        <Link to="/ForecastMinsk/">
          <button style={{width: 68, height: 20, marginTop: 10, marginLeft:20, color: 'gray'}}
            onClick={hideMain}
          >forecast</button>
        </Link>
      </div>
    <div className="weather-card">
      <div className="weather-icon cloud"></div>
      <div className="wrap_icon">
        <h1>{temp2}º</h1>
        <img style={{height: 65, width: 65, marginTop: 6}} src={pic2} alt=""/>
      </div>   
      <h4>weather now</h4>
      <p>{name2}</p>
      <Link to="/ForecastMoscow/">
        <button style={{width: 68, height: 20, marginTop: 10, marginLeft:20, color: 'gray'}}
          onClick={hideMain}
        >forecast</button>
      </Link>
    </div>
    <div className="weather-card">
      <div className="weather-icon cloud"></div>
      <div className="wrap_icon">
      <h1>{temp3}º</h1>
      <img style={{height: 65, width: 65, marginTop: 6}} src={pic3} alt=""/>
    </div>   
      <h4>weather now</h4>
      <p>{name3}</p>
      <Link to="/ForecastBratislava/">
        <button style={{width: 68, height: 20, marginTop: 10, marginLeft:20, color: 'gray'}}
          onClick={hideMain}
        >forecast</button>
      </Link>
    </div>

  </div>
  )
}

  
