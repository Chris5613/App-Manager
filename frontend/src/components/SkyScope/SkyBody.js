import React, { useState } from 'react'
import axios from 'axios'


const Body = () => {

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

    const searchLocation = (event) => {
    if (event.key === 'Enter') {
          axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
        setLocation('')
        }
    }
    return (
        <div className="skyapp">
            <div className="search">
              <input
                  id="cityinput"
                  value={location}
                  onChange={event => setLocation(event.target.value)}
                  onKeyDown={searchLocation}
                  placeholder='Enter a Location'
                  type="text" />
            </div>
          <div className="container">
            {data.name !== undefined &&
              <div className="top">
              <div className="selectedWeather">
                  <div className="weatherData">
                      <div className="iconAndTemp">
                          {/* <img src="" width="85" height="75" class="icon selected"/> */}
                          {/* <i class="fa-regular fa-sun fa-2x"></i> */}
                          <p className="city">{data.name}</p>
                      </div>
                      <div className="text">
                          <p>Degrees:</p>
                          <p>Currently: </p>
                          <p>Feels like:</p>
                          <p>Humidity:</p>
                          <p>Wind Speed:</p>
                      </div>
                      <div className="variables">
                          <p className="temp bold">{data.main ? <p>{data.main.temp.toFixed()}°F</p> : null}</p>
                          <p className="current bold">{data.weather[0].main}</p>
                          <p className="pop">{data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}</p>
                          <p className="humidity bold">{data.main.humidity}%</p>
                          <p className="wind">{data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}</p>
                      </div>
                  </div>
                  <div className="metaData">
                      <p className="date">Date Here</p>
                      <div className="time">
                          <p className="time">Time Here</p>
                      </div>
                  </div>
              </div>
</div>
} </div>
        </div>
      );
          }

export default Body
