import React from 'react';
import './App.css';
import HomePage from './component/HomePage/HomePage';
import Auth from './component/Auth/Auth';
import {Route, Routes } from 'react-router-dom'
import Weather from './component/Weather/Weather';
import { useSelector } from 'react-redux';

function App() {

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <React.Fragment>
        <Routes>
          <Route path="/"  element={<HomePage/>}/>
          {!isLoggedIn ? <Route path="/auth"  element={<Auth/>}/> :
            <>
              <Route path="/weatherDetails"  element={<Weather/>}/>
            </>
          }
          
        </Routes>
    </React.Fragment>
  );
}

export default App;
