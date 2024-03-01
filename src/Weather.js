

import React, { useState } from 'react'
import './Weather.css'
const api = {
    key: "ec5ff5d21c47020e1f8dd865aca7d573" ,
    base: "https://api.openweathermap.org/data/2.5/"
}
function Weather() {
    const[query , setQuery] = useState('')
    const[weather , setWeather] = useState({});
    const[weatherclass,setWeatherclass] = useState('')

    const search = evt => {
        if(evt.key === "Enter"){
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)

            .then(res => res.json())
            .then(result => {
                setWeatherclass(result.weather[0].main)
                setWeather(result);
                setQuery('');
                
            })
        }
    }
    const dateBuilder = (d) => {
        let months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];

        let days = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`
    }

    return (
    <div>{}
        <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 18) ? 'app warm' : 'app'): 'app warm'}>
    <main>
      <div className='search-box'>
        <input type='text' className='search-bar' placeholder='Search...' value={query} onChange={e =>setQuery(e.target.value)} onKeyPress={search}/>
      </div>

      {(typeof weather.main != "undefined")?(
        <div>
        <div className='location-box'>
            <div className='location'>
                {weather.name},{weather.sys.country}
                <div className='date'>
                    {dateBuilder(new Date())}
                </div>
                
            </div>
            <div className='weather-box'>
                <div className='temp'>{Math.round(weather.main.temp)}°C
                </div>

                <div className='weather'>
                    {weather.weather[0].main}
                </div>
            </div>
        </div>
        </div>
      ) : ('')}
      
    </main>
   </div>
    </div>
  )
}

export default Weather