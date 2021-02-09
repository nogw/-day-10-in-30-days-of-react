import React from 'react'
import Main from './components/Main'
import Days from './components/Days'
import GlobalStyles from './styles'
import { Container } from './styles/styles'
function App() {
  return (
    <>
      <Container>
        <Main/>    
        <Days/>
      </Container>    
      <GlobalStyles/>
    </>
  );
}

export default App;
