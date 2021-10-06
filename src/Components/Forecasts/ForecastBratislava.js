import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

import findItems from '../findeItems'
import {setShowMain} from '../../actions'

export default function ForecastBratislava() {
    const load = useSelector(state => state.load)
  const dispatch = useDispatch()

  const showMain = () => {
    dispatch(setShowMain())
  }
  let values = findItems(load[5]).flat().flat().flat().flat() 
  let values1 = findItems(load[2]).flat().flat()
  
  let name = values1.find(item => item === "Bratislava")

  const temp1 = Math.round(values[254] - 273)
  const temp2 = Math.round(values[430] - 273)
  const temp3 = Math.round(values[606] - 273)
  const temp4 = Math.round(values[760] - 273)

  const pic1 = `https://openweathermap.org/img/wn/${values[222]}@2x.png`
  const pic2 = `https://openweathermap.org/img/wn/${values[420]}@2x.png`
  const pic3 = `https://openweathermap.org/img/wn/${values[596]}@2x.png`
  const pic4 = `https://openweathermap.org/img/wn/${values[794]}@2x.png`
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
              <h4>Data: {values[208]}</h4>
          </div>
            <div className="weather-card">
              <div className="wrap_icon">
                <h1>{temp2}º</h1>
                <img style={{height: 65, width: 65, marginTop: 6}} src={pic2} alt=""/>
              </div>   
              <h4>weather</h4>
              <p>{name}</p>
              <h4>Data: {values[406]}</h4>
            </div>
            <div className="weather-card">
              <div className="wrap_icon">
                <h1>{temp3}º</h1>
                <img style={{height: 65, width: 65, marginTop: 6}} src={pic3} alt=""/>
              </div>   
              <h4>weather</h4>
              <p>{name}</p>
              <h4>Data: {values[582]}</h4>
            </div>
            <div className="weather-card">
            <div className="wrap_icon">
              <h1>{temp4}º</h1>
              <img style={{height: 65, width: 65, marginTop: 6}} src={pic4} alt=""/>
            </div>
              <h4>weather</h4>
              <p>{name}</p>
              <h4>Data: {values[758]}</h4>
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
