import Countries from './Countries'
import SingleCountry from './SingleCountry'

const CountriesDisplay = ({ countries, countryViews, setCountryViews, singleCountry, weather }) => {
    if (singleCountry) {
        return (
            <SingleCountry country={countries[0]} weather={weather} />
        )
    } else {
        return (
            <Countries countries={countries} countryViews={countryViews} setCountryViews={setCountryViews} />
        )
    }
}

export default CountriesDisplay