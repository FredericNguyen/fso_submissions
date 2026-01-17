import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'
import Notification from './components/Notification'
import ErrorMessage from './components/ErrorMessage'

const App = () => {
    const [countries, setCountries] = useState([])
    const [searchCountry, setsearchCountry] = useState("")
    const [message, setMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [singleCountry, setSingleCountry] = useState(false)


    useEffect(() => {
        if (searchCountry) {
            axios
                .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
                .then(response => {
                    const foundCountries = response.data.filter((country) => country.name.common.toLowerCase().includes(searchCountry.toLowerCase()))
                    if (foundCountries.length > 10) {
                        setMessage("Too many matches, specify another filter")
                        setCountries([])
                        setSingleCountry(false)
                    } else {
                        setMessage(null)
                        if (foundCountries.length == 1) {
                            setSingleCountry(true)
                        } else {
                            setSingleCountry(false)
                        }
                        setCountries(foundCountries)
                    }
                })
        }
    }, [searchCountry])

    const findCountry = (event) => {
        setsearchCountry(event.target.value)
    }

    return (
        <div>
            <h2>Country Search</h2>
            <Filter searchCountry={searchCountry} findCountry={findCountry} />
            <Notification message={message} />
            <ErrorMessage message={errorMessage} />
            <Countries countries={countries} singleCountry={singleCountry}/>
        </div>
    )
}

export default App