import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import './Main.scss' 
import findItems from '../findeItems'
import {actions} from '../../actions'
import {AppType} from '../../store'
export default function Main() {

  const dispatch = useDispatch()
  const load = useSelector((state: AppType) => state.load)
  console.log(load)

  const hideMain = () => {
    dispatch(actions.closeMain())
  }
  
  let values1 = findItems(load[0]).flat().flat()
  let values2 = findItems(load[1]).flat().flat()
  let values3 = findItems(load[2]).flat().flat()
  let values4 = findItems(load[3]).flat().flat()
  console.log(values3)
  let name1: string = values1.find((item: any) => item === "Minsk")
  let name2: string = values2.find((item: any) => item === "Moscow")
  let name3: string = values3.find((item: any) => item === "London")
  let name4: string = values4.find((item: any) => item === "Madrid")
 
  const temp1: number = Math.round(values1[7] - 273)
  const temp2: number = Math.round(values2[7] - 273)
  const temp3: number = Math.round(values3[7] - 273)
  const temp4: number = Math.round(values4[7] - 273)
  
  const pic1 = `https://openweathermap.org/img/wn/${values1[5]}@2x.png`
  const pic2 = `https://openweathermap.org/img/wn/${values2[5]}@2x.png`
  const pic3 = `https://openweathermap.org/img/wn/${values3[5]}@2x.png`
  const pic4 = `https://openweathermap.org/img/wn/${values4[5]}@2x.png`

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
        <Link to="/Minsk/">
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
      <Link to="/Moscow/">
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
      <Link to="/London/">
        <button style={{width: 68, height: 20, marginTop: 10, marginLeft:20, color: 'gray'}}
          onClick={hideMain}
        >forecast</button>
      </Link>
    </div>
    <div className="weather-card">
      <div className="weather-icon cloud"></div>
      <div className="wrap_icon">
      <h1>{temp4}º</h1>
      <img style={{height: 65, width: 65, marginTop: 6}} src={pic4} alt=""/>
    </div>   
      <h4>weather now</h4>
      <p>{name4}</p>
      <Link to="/Ibiza/">
        <button style={{width: 68, height: 20, marginTop: 10, marginLeft:20, color: 'gray'}}
          onClick={hideMain}
        >forecast</button>
      </Link>
    </div>

  </div>
  )
}

  
