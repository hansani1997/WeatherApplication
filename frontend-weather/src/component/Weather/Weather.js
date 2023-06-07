import React, { useState } from 'react'
import Search from '../Search/Search'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import WeatherBackgroundImg from '../../image/loginImg.jpg'
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api'
import Forecast from '../Forecast/Forecast'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store';
import { Link } from 'react-router-dom';


export default function Weather() {

  const dispatch = useDispatch();
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

 const handleOnSearchChange = (searchData) => {
    //console.log(searchData);

    const [lat, lon] = searchData.value.split(" "); 

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forcastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecast({ city: searchData.label, ...forcastResponse });
    })
    .catch((err) => console.log(err));
  }

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className='container' 
    style={{
      justifyContent:'center',
      backgroundImage:`url(${WeatherBackgroundImg})`,
      height:'120vh',
      margin:'0px',paddingLeft:'50px',
      paddingRight:'50px'}}>
      <div style={{padding:'20px',display: 'flex', justifyContent: 'flex-end'}}>
        <Button onClick={() => dispatch(authActions.logout())}
          LinkComponent={Link} to="/" variant='contained' sx={{margin:1, borderRadius:6}} color='warning'>Logout</Button>
      </div>
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather &&<CurrentWeather data = {currentWeather}/>}
     {forecast && <Forecast data={forecast}/>}
    </div>
  )
}
