import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import countries from "../countries.json"
import axios from "axios"

function CountriesList() {
     const[SomeCountries, setSomeCountries] = useState([])
         
     useEffect(()=> {
      axios.get(" https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
          console.log(response)
          setSomeCountries(response.data)
        
      
      })
      .catch((error) => {
          console.log(error)
      })

     },[])

  return (
    
    <div>
        <h3>Countries List</h3>
        {countries.map((eachCountry) => {
           
       return (
        <div key={eachCountry.alpha3Code} style={{display:"flex" ,flexDirection:"row", justifyContent:"flex-start"}}>
        <div >
        <img src={` https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt="symbol" />
        
        </div>
        <div style={{marginLeft:"25px"}}>
        <h4 ><Link to={`/country/${eachCountry.alpha3Code}`}>{eachCountry.name.official}</Link> </h4>
        </div>
        
        </div>
        )
        })}
    </div>
  )
}

export default CountriesList
//<h4 key={eachCountry.name}><Link to={`/${eachCountry.name.alpha3code}`}>{eachCountry.name.alpha3Code}</Link></h4>
