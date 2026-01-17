const Country = ({ country, singleCountry }) => {

    if (singleCountry) {
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
                <img src={country.flags.png} alt="Flag of country"/>
            </div>
        )
    }
    return (
        <div>
            {country.name.common}
        </div>
    )

}

export default Country