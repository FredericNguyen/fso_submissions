import Country from './Country'
const Countries = ({ countries, countryViews, setCountryViews }) => <div>
    {
        countries.map((country, indexCountry) =>
            <Country key={country.cca3} country={country} countryViews={countryViews} indexCountry={indexCountry} setCountryViews={setCountryViews} />
        )}
</div>

export default Countries