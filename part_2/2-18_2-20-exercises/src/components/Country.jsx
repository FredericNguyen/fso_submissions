import CountryViewButton from './CountryViewButton'

const Country = ({ country, countryViews, setCountryViews, indexCountry }) => {

    if (countryViews[indexCountry]) {
        return (
            <div>
                <h1>{country.name.common}</h1>
                <div>
                    Capital {country.capital} <br />
                    Area {country.area}
                </div>
                <h2>Languages</h2>
                <ul>
                    {
                        Object.values(country.languages).map(language =>
                            <li>{language}</li>
                        )
                    }
                </ul>
                <p></p>
                <img src={country.flags.png} alt={country.flags.alt} />
                <CountryViewButton countryViews={countryViews} indexCountry={indexCountry} setCountryViews={setCountryViews} />
            </div>
        )
    }
    return (
        <div>
            {country.name.common}
            <CountryViewButton countryViews={countryViews} indexCountry={indexCountry} setCountryViews={setCountryViews} />
        </div>
    )

}

export default Country