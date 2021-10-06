import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {AppType} from '../../store'
import findItems from '../findeItems'
import {actions} from '../../actions'

export default function ForecastMinsk() {
  const load = useSelector((state: AppType) => state.load)
  const dispatch = useDispatch()

  const showMain = () => {
    dispatch(actions.setShowMain())
  }
  let values = findItems(load[3]).flat().flat().flat().flat() 
  let values1 = findItems(load[0]).flat().flat()
  
  let name: string = values1.find((item: any) => item === "Minsk")

  const temp1: number = Math.round(values[246] - 273)
  const temp2: number = Math.round(values[422] - 273)
  const temp3: number = Math.round(values[598] - 273)
  const temp4: number = Math.round(values[774] - 273)

  const pic1 = `https://openweathermap.org/img/wn/${values[236]}@2x.png`
  const pic2 = `https://openweathermap.org/img/wn/${values[412]}@2x.png`
  const pic3 = `https://openweathermap.org/img/wn/${values[588]}@2x.png`
  const pic4 = `https://openweathermap.org/img/wn/${values[764]}@2x.png`
  
  const [isInput, setInput] = useState(["Hi"])
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }
  const onInput = (e: any) => {
    setInput([e.target.value])
  }
  const sity1: string = isInput.filter((item: any) => item.toLowerCase() === "moscow")
    .map(elem => {return "Moscow"}).join()
  const sity2: string = isInput.filter((item: any) => item.toLowerCase() === "bratislava")
    .map(elem => {return "Bratislava"}).join()
  
  let city: string = ''
  if (sity1){
    city = `/${sity1}/`
  }
  if (sity2){
    city = `/${sity2}/`
  }else{
    city = '/Minsk/'
  }
  return (
    <>
      <div className="wrap_form" style={{display: "flex", justifyContent: "center", marginTop: 25}}>
        <form onSubmit={handleSubmit}>
          <input  style={{color: "gray"}}type="text" required placeholder="Moscow Bratislava"
            onChange={onInput}
          />
          <Link to={city}>
            <button type="reset">&times;</button>
          </Link>
        </form>
      </div>
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
      <div className="wrap_button" style={{display: "flex", justifyContent: "center"}}>
        <Link to="/">
          <button style={{height: 20, width: "auto", color: "gray"}}
            onClick={showMain}
          >back to main</button>
        </Link>
      </div>
      
    </>
  )
}