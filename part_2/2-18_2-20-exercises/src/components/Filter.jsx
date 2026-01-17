const Filter = ({searchCountry, findCountry}) => <p> find countries 
    <input type="search"
        value={searchCountry}
        onChange={findCountry}
    />
</p>

export default Filter