import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { ParseExcel } from './Components/ParcelExcel/ParseExcel';
import { ReadExcel } from './Components/ReadExcel/ReadExcel';
import Links from './Components/Links';
import styled from "styled-components"

function App() {
  const StyledBody = styled.div`

  background-color:#008585;
  
`;
  return (
    <StyledBody>
     <Links />
    <Routes>
     
      <Route path='/' element={<Home/>}/>
      <Route path='/parse-excel' element={<ParseExcel/>}/>
      <Route path='/multi-excel' element={<ReadExcel/>}/>
    </Routes>
    </StyledBody>
  );
}

export default App;
