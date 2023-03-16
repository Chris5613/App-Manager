import React, { useState } from 'react'
import axios from 'axios'
import UpperBody from './UpperBody';

const Body = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=bd0a7e15427ee62b3be173092dc5feea`

    const searchLocation = (event) => {
    if (event.key === 'Enter') {
        axios.get(url).then((response) => {
            setData(response.data)
        })
        setLocation('')
        }
    }

    return (
        <>
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
            <UpperBody data={data}/>
        </div>
        </>
);
    }
export default Body
