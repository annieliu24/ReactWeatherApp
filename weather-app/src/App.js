import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Weather from './components/weather';
import {WEATHER_APP_API_KEY, WEATHER_APP_ICON_URL, WEATHER_APP_API_URL} from './env/environment';

function App() {

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {

    async function fetchData() {

        let promise = new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude)
           },
          (error) => {console.error(`no geolocation found: ${JSON.stringify(error)}`)},
          );
          
          resolve([lat, long])
        });

        const api = fetch(`${WEATHER_APP_API_URL}/weather/?lat=${lat}&lon=${long}&appid=${WEATHER_APP_API_KEY}&units=imperial`).then((result) => result.json());

        let result = await Promise.all([promise, api]);
        if (result) {
          setData(result[1])
        }        
    }


    fetchData();

  }, [lat, long]);


  return (
    <div className="App">
      {
        (data?.main) ? <Weather weatherData={data}/> : <div></div>
      }
    </div>
  );
}

export default App;
