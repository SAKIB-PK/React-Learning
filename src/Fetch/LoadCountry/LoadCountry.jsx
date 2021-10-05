import React, { useEffect, useState } from 'react'

function LoadCountry() {
    const [countries,setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(e=> e.json())
        .then(res=> setCountries(res))
        
    }, [])
    return (
        <div>
            {console.log(countries)}
        </div>
    )
}

export default LoadCountry
