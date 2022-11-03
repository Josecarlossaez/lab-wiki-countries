import React from 'react'
import { useParams } from 'react-router-dom'
import countries from "../countries.json"

function CountryDetails() {
const{id} = useParams()
console.log(id)
  const filteredCountries = countries.filter((eachCountry) => {
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