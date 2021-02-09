import styled from 'styled-components';

export const Container = styled.div`
  max-width: 250px;
  min-height: 250px;
  display: flex;
  margin: 10px;
  flex-flow: wrap;
`;

export const Cube = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 125.0px;
  min-width: 125.0px;
  max-height: 125.0px;
  max-width: 125.0px;
  padding: 20px;

  h1, h3 {
    color: #1e1841;
  }
`;