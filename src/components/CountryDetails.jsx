import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from "react"

import axios from "axios"


function CountryDetails() {
const{id} = useParams()
console.log(id)
const [countryList, setCountryList] = useState(null)
const [isFetching, setIsFetching] = useState(true)
useEffect(()=> {
    axios.get(" https://ih-countries-api.herokuapp.com/countries")
    .then((response) => {
        console.log(response)
        setCountryList(response.data)
        setIsFetching(false)
    
    })
    .catch((error) => {
        console.log(error)
    })
},[])
// actua como ComponentDidUpdate y componentDidMount
// 4. clausula de guardia para el loading
if(isFetching === true){
    return <h3>...buscando</h3>
    // no hago más hasta que isFetching sea falso
}
  const filteredCountries = countryList.filter((eachCountry) => {
    return eachCountry.alpha3Code === id
  })

    console.log(filteredCountries)

  return (
    <div>
    <h3>Aquí los detalles</h3>
    <div className="col-7">
            <h1>{filteredCountries[0].name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width:"30%"}}>Capital</td>
                  <td>{filteredCountries[0].capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                   {filteredCountries[0].area}km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {filteredCountries[0].borders.map((eachBorder) => {
                      return <li key={eachBorder}><a href={filteredCountries[0].alpha3Code}>{eachBorder}</a></li>
                    })}
                     
                     
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    
  
  )
}

export default CountryDetails