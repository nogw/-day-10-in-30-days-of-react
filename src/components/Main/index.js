import React, { useState, useEffect } from 'react';
import { Container, Icon, Input, Search } from './styles';
import axios from 'axios'

function Main() {
  const [city, setCity] = useState('sao paulo')
  const [temp, setTemp] = useState('')
  const apiKey = 'ff1449a243ee653fe69883000081ee78'

  const KelvinToCelsius = (kev) => {
    return (kev - 273.15).toFixed(0)
  }

  const getTime = () => {
    console.log(city)
    axios({
      method: 'get',    
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
    }).then((res) => {
      setTemp(KelvinToCelsius(res.data.main.temp))
    })
  }

  useEffect(() => { 
    const success = (position) => {
      const lat = position.coords.latitude.toFixed(5);
      const lon = position.coords.longitude.toFixed(5);

      axios({
        method: 'get',
        
        url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ff1449a243ee653fe69883000081ee78`,
      }).then((res) => {
        setTemp(KelvinToCelsius(res.data.main.temp))
      })
    }

    const error = () => {
      console.log('error, try restart')
    }

    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      console.log('Locating…');
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    getTime()
  }

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  return (
    <Container>
      <Icon/>
      <h1>weather</h1>
      <h4>{temp}°C</h4>
      <Input>
        <Search/>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input onChange={(e) => handleChange(e)} type="text" placeholder="enter city"/>
        </form>
      </Input>
    </Container>
  );
}

export default Main;