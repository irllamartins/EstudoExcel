import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { ParseExcel } from './Components/ParcelExcel/ParseExcel';
import { ReadExcel } from './Components/ReadExcel/ReadExcel';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/parse-excel' element={<ParseExcel/>}/>
      <Route path='/multi-excel' element={<ReadExcel/>}/>
    </Routes>
  );
}

export default App;
