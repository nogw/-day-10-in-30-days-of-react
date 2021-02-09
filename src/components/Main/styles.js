import styled from 'styled-components';
import { TiWeatherDownpour } from 'react-icons/ti'
import { FaSearch } from 'react-icons/fa'

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 250px;
  width: 250px;
  margin: 10px;
  padding: 20px;
  
  h1 {
    font-size: 30px;
    color: #1E1841;
    margin: 5px;
  }  
  h4 {
    font-size: 20px;
    color: #1E1841;
    margin: 5px;
    font-weight: 400;
    margin-bottom: 15px;
  }
`;

export const Icon = styled(TiWeatherDownpour)`
  font-size: 30px;
  color: #1E1841;
  margin: 5px;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  position: relative; 
  margin: 5px;

  input {
    background-color: #1E1841;
    padding: 8px;
    padding-bottom: 8.1px;
    padding-left: 30px;
    border-radius: 6px;
    width: 100%;
    font-weight: bold;
    border: none;
    outline: none;
    color: #DBDBEB;

    &::placeholder {
      opacity: 1;
      color: #DBDBEB;
      font-weight: bold;
    }
  }
`

export const Search = styled(FaSearch)`
  color: #DBDBEB;
  position: absolute; 
  left: 10px;
  top: 9px;
`;