import React, { useState } from 'react';
import { APIfetch } from './API/APIfetch';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await APIfetch(query);
            setWeather(data);
            setQuery('');
        }
    }
    return(
        <div className="main-container">
            <input type="text" className= "search" placeholder= "Search location" value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
            {weather.main && (
                <div className='city'>
                    <h2 className='city-name'>
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                    <div className="weather-info">
                        <p>Weather Info</p>
                    </div>
                    <div className="wind-speed">
                        <span>Wind: {weather.wind.speed}</span>
                        <sup>m/s</sup>
                    </div>
                    <div className="humidity-value">
                        <span>Humidity: {weather.main.humidity}</span>
                        <sup>%</sup>
                    </div>
                    <div className="logo">
                        <img className="weather-logo" src={'https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/new_logo_black.png'} alt={''} height="35" />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;