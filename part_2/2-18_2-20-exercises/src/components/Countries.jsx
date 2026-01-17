import Country from './Country'
const Countries = ({ countries, singleCountry }) => <div>
    {
        countries.map(country =>
            <Country key={country.cca3} country={country} singleCountry={singleCountry} />
        )}
</div>

export default Countries