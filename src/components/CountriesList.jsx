import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import countries from "../countries.json"


function CountriesList() {
    //  const[SomeCountries, setSomeCountries] = useState([])
         
    //  useEffect(()=> {

    //  },[])

  return (
    
    <div>
        <h3>Countries List</h3>
        {countries.map((eachCountry) => {
            {/* console.log(eachCountry.name.official) */}
       return (
        <div key={eachCountry.alpha3Code}>
        <h4 ><Link to={`/country/${eachCountry.alpha3Code}`}>{eachCountry.name.official}</Link> </h4>
        <img src={eachCountry.currencies.symbol} alt="symbol" />
        <hr />
        </div>
        )
        })}
    </div>
  )
}

export default CountriesList
//<h4 key={eachCountry.name}><Link to={`/${eachCountry.name.alpha3code}`}>{eachCountry.name.alpha3Code}</Link></h4>
