import React from 'react'
import './CurrentWeather.css'
import Paper from '@mui/material/Paper';


export default function CurrentWeather({data}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center',margin:'10px' }}>
        <Paper style={{ 
            backgroundColor: '#9dcdf5', 
            borderRadius:'20px',
            width:'500px' ,
            padding:'0 20px 20px 20px'
            }} elevation={3}>
           <div className='top'>
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='weather-description'>{data.weather[0].description}</p>
                </div>
                <img 
                    alt='weather' 
                    className='weather-icon' 
                    src={`icons/${data.weather[0].icon}.png`} 
                    style={{width:'50px',height:'50px'}}/>
           </div>
           <div className='bottom'>
            <p className='temperature'>{Math.round(data.main.temp)}°C</p>
            <div className='details'>
                <div className='parameter-row'>
                    <span className='parameter-label-top'>Details</span>
                </div>
                <div className='parameter-row'>
                    <span className='parameter-label'>Feels like</span>
                    <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
                </div>
                <div className='parameter-row'>
                    <span className='parameter-label'>Wind</span>
                    <span className='parameter-value'>{data.wind.speed} m/s</span>
                </div>
                <div className='parameter-row'>
                    <span className='parameter-label'>Humidity</span>
                    <span className='parameter-value'>{data.main.humidity}%</span>
                </div>
                <div className='parameter-row'>
                    <span className='parameter-label'>Pressure</span>
                    <span className='parameter-value'>{data.main.pressure} hPa</span>
                </div>
            </div>
           </div>
         </Paper>
</div>
  )
}
