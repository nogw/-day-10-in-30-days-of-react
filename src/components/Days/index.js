import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs' 
import { Container, Cube } from './styles';

function Days() {
  const [day, setDay] = useState([])
  const [mouth, setMouth] = useState([])
  const [hour, setHour] = useState([])
  const [minute, setMinute] = useState([])

  const dateNow = () => {
    setDay(dayjs().date())
    setMouth(dayjs().get('month') + 1)
    setHour(dayjs().get('hour'))
    setMinute(dayjs().get('minute'))
    setTimeout(function(){ dateNow() }, 6000);
  }
  
  useEffect(() => {
    dateNow()
  }, [])

  return (
    <Container>
      <Cube>
        <h3>day</h3>
        <h1>{day}</h1>
      </Cube>
      <Cube>
        <h3>month</h3>
        <h1>{mouth}</h1>
      </Cube>
      <Cube>
        <h3>hour</h3>
        <h1>{hour}</h1>
      </Cube>
      <Cube>
        <h3>minute</h3>
        <h1>{minute}</h1>
      </Cube>
    </Container>
  );
}

export default Days;