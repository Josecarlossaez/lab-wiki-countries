import React from 'react'
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <Navbar/>
       <div id="mainContainer">
        <CountriesList/>
        <Routes>
         <Route path="/country/:id" element={<CountryDetails/>}/>
     
        </Routes>
    </div>
    </div>
  );
}

export default App;
