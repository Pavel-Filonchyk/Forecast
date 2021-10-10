import React, {useState, useMemo} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {AppType} from '../../store'
import forecastNextDay from '../../functions/forecastNextDay'
import {actions} from '../../actions'

export default function Cities() {

    const load = useSelector((state: AppType) => state.load)
    const items = useSelector((state: AppType) => state.items)
    const cities = useSelector((state: AppType) => state.cities)
    const dispatch = useDispatch()
  
    const newElems = useMemo(() =>
    forecastNextDay(load[items[0]]).flat()
      .map(item => {
        return item
      }),
    [load, items])
     
    const picNicks = [newElems[2], newElems[5], newElems[8], newElems[11]]
    const pics = picNicks.map(item => {
      return `https://openweathermap.org/img/wn/${item}@2x.png`
    })

    const showMain = () => {
      dispatch(actions.setShowMain())
    }

    const [isInput, setInput] = useState('sorry')
    const handleSubmit = (e: any) => {
      e.preventDefault()
    }
    const onInput = (e: any) => {
      setInput(e.target.value)
    }
    
      let city = null
      if (isInput){
        city = `/${isInput}/`
      }
     
     let names = `${items[2]} ${items[3]} ${items[4]}`
    return (
        <>
        <div className="wrap_form" style={{display: "flex", justifyContent: "center", marginTop: 25}}>
          <form onSubmit={handleSubmit}>
            <input  style={{color: "gray"}} type="text" placeholder="technical break"
              onChange={onInput}
            />
            {city ? <Link to={city}>
            <button type="reset"
            >&times;</button>
            </Link>
          : null}
          </form>
        </div>
        <div className="weather-wrapper">
          <div className="weather-card">
            <div className="wrap_icon">
              <h1>{newElems[1]}º</h1>
              <img style={{height: 65, width: 65, marginTop: 6}} src={pics[0]} alt=""/>
            </div>
              <h4>weather</h4>
              <p>{items[1]}</p>
              <h4>Data: {newElems[0]}</h4>
          </div>
            <div className="weather-card">
              <div className="wrap_icon">
                <h1>{newElems[4]}º</h1>
                <img style={{height: 65, width: 65, marginTop: 6}} src={pics[1]} alt=""/>
              </div>   
              <h4>weather</h4>
              <p>{items[1]}</p>
              <h4>Data: {newElems[3]}</h4>
            </div>
            <div className="weather-card">
              <div className="wrap_icon">
                <h1>{newElems[7]}º</h1>
                <img style={{height: 65, width: 65, marginTop: 6}} src={pics[2]} alt=""/>
              </div>   
              <h4>weather</h4>
              <p>{items[1]}</p>
              <h4>Data: {newElems[6]}</h4>
            </div>
            <div className="weather-card">
            <div className="wrap_icon">
              <h1>{newElems[10]}º</h1>
              <img style={{height: 65, width: 65, marginTop: 6}} src={pics[3]} alt=""/>
            </div>
              <h4>weather</h4>
              <p>{items[1]}</p>
              <h4>Data: {newElems[9]}</h4>
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
