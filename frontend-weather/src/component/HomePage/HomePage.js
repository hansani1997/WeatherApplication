import React from 'react'
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import HomePageImg from '../../image/homepageimg.jpg'
import Icon from '../../image/homepageicon.png'
import Sunny from '../../image/sunny.png'
import Cloud from '../../image/cloud.png'
import Season from '../../image/season.png'
import Button from '@mui/material/Button';
import './HomePage.css'
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function HomePage() {
  return (
    <div className='home-page'>
       <Grid container spacing={4} sx={{backgroundImage:`url(${HomePageImg})`, height:'100vh',width:'100%'}}> 
            <div style={{display:'flex', margin:'20px'}}>
              <div className='leftside-div' style={{backgroundColor:'#343c4a',width:'550px',margin:'10px',borderRadius:'10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={Season} alt='' style={{width:'150px',height:'150px'}}/>
                <img src={Sunny} alt='' style={{width:'100px',height:'100px'}}/>
                <img src={Cloud} alt='' style={{width:'50px',height:'50px'}}/>
              </div>

              <div style={{ width: '850px', margin: '10px', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img src={Icon} alt='' style={{width:'200px',height:'200px'}}/>
                <h1>Breeze</h1>
                <h3>Weather App</h3>
                <Button LinkComponent={Link} to="/auth" variant="contained" sx={{borderRadius:'20px',marginBottom:'10px'}}>Get started</Button>

              </div>
            </div>
           
       </Grid>
    </div>
  )
}
