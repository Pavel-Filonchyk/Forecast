import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

import findItems from '../findeItems'
import {setShowMain} from '../../actions'

export default function ForecastMoscow() {
    const load = useSelector(state => state.load)
  const dispatch = useDispatch()

  const showMain = () => {
    dispatch(setShowMain())
  }
  let values = findItems(load[4]).flat().flat().flat().flat() 
  let values1 = findItems(load[1]).flat().flat()
  
  let name = values1.find(item => item === "Moscow")

  const temp1 = Math.round(values[246] - 273)
  const temp2 = Math.round(values[422] - 273)
  const temp3 = Math.round(values[598] - 273)
  const temp4 = Math.round(values[774] - 273)

  const pic1 = `https://openweathermap.org/img/wn/${values[236]}@2x.png`
  const pic2 = `https://openweathermap.org/img/wn/${values[412]}@2x.png`
  const pic3 = `https://openweathermap.org/img/wn/${values[588]}@2x.png`
  const pic4 = `https://openweathermap.org/img/wn/${values[764]}@2x.png`
    return (
        <>
        <div className="weather-wrapper">
          <div className="weather-card">
            <div className="wrap_icon">
              <h1>{temp1}º</h1>
              <img style={{height: 65, width: 65, marginTop: 6}} src={pic1} alt=""/>
            </div>
              <h4>weather</h4>
              <p>{name}</p>
              <h4>Data: {values[222]}</h4>
          </div>
            <div className="weather-card">
              <div className="wrap_icon">
                <h1>{temp2}º</h1>
                <img style={{height: 65, width: 65, marginTop: 6}} src={pic2} alt=""/>
              </div>   
              <h4>weather</h4>
              <p>{name}</p>
              <h4>Data: {values[398]}</h4>
            </div>
            <div className="weather-card">
              <div className="wrap_icon">
                <h1>{temp3}º</h1>
                <img style={{height: 65, width: 65, marginTop: 6}} src={pic3} alt=""/>
              </div>   
              <h4>weather</h4>
              <p>{name}</p>
              <h4>Data: {values[574]}</h4>
            </div>
            <div className="weather-card">
            <div className="wrap_icon">
              <h1>{temp4}º</h1>
              <img style={{height: 65, width: 65, marginTop: 6}} src={pic4} alt=""/>
            </div>
              <h4>weather</h4>
              <p>{name}</p>
              <h4>Data: {values[750]}</h4>
          </div>
        </div>
        <div className="wrap_button"  style={{display: "flex", justifyContent: "center"}}>
          <Link to="/">
            <button style={{height: 20, width: "auto", color: "gray"}}
              onClick={showMain}
            >back to main</button>
          </Link>
        </div>
        
      </>
    )
}
