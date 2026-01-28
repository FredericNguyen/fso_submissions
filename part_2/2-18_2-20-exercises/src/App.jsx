import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountriesDisplay from './components/CountriesDisplay'
import Notification from './components/Notification'
import ErrorMessage from './components/ErrorMessage'

const App = () => {
    const [countries, setCountries] = useState([])
    const [searchCountry, setsearchCountry] = useState("")
    const [message, setMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [countryViews, setCountryViews] = useState(null)
    const [singleCountry, setSingleCountry] = useState(false)
    const [weather, setWeather] = useState(null)


    useEffect(() => {
        if (searchCountry) {
            axios
                .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
                .then(response => {
                    const foundCountries = response.data.filter((country) => country.name.common.toLowerCase().includes(searchCountry.toLowerCase()))
                    if (foundCountries.length > 10) {
                        setMessage("Too many matches, specify another filter")
                        setSingleCountry(false)
                        setCountries([])
                    } else {
                        setMessage(null)
                        if (foundCountries.length == 1) {
                            const apiKey = import.meta.env.VITE_WEATHER_KEY;
                            const city = foundCountries[0].capital
                            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

                            axios
                                .get(url)
                                .then(response => {
                                    setWeather(response.data)
                                    setSingleCountry(true)
                                }
                                )
                        } else {
                            setSingleCountry(false)
                            setCountryViews(Array.from({ length: foundCountries.length }, () => false))
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
            <CountriesDisplay weather={weather} singleCountry={singleCountry} countries={countries} countryViews={countryViews} setCountryViews={setCountryViews} />
        </div>
    )
}

export default App