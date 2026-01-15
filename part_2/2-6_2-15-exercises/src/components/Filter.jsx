const Filter = ({searchPerson, findPerson}) => <p> filter shown with 
    <input type="search"
        value={searchPerson}
        onChange={findPerson}
    />
</p>

export default Filter