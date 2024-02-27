import React, { useState } from 'react';
import Axios from "axios";
import './Weather.css';  

const KEY='32265b7695f0b747a5a0a9b099d54bb9';


const App = () => {

  const [city,setCity] = useState("");
  const [data,setData] = useState();
  const fetchData = async () => {
    try{
      const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`);
      setData(response.data);
    }
    catch(err){
      alert('Please Enter the City Name Correctly');
    }

  };
  return (
    <div className='full-page'>
    <div className='App'>
      <h1 className='title'>Weather App</h1>
      <div className='input-container'>
        <input
        type="text"
        className='input'
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder='Enter the City Name' 
        />
          <button className='button' onClick={fetchData}>Fetch</button>
      </div>
      <div>
        {data &&(
          <div className='container'>
          <h1 className='city-name'>{data.name},{data.sys.country}</h1>
          <div className='weather-info'>
            <div className='temp'>{Math.round(data.main.temp)} °C</div>
          </div>
          <div className='coordinated'>
            <div>Lat - {data.coord.lat}</div>
            <div>lon - {data.coord.lon}</div>
          </div>
          </div>
        )}
      </div>
      
    </div>
    </div>
  )
}

export default App;
