import Weather from './Weather'

const SingleCountry = ({ country, weather }) => {
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
            <Weather country={country} weather={weather}/>
        </div>
    )
}

export default SingleCountry