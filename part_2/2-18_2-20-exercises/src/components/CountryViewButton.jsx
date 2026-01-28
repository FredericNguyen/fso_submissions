const CountryViewButton = ({ countryViews, indexCountry, setCountryViews }) => {
      const label = countryViews[indexCountry]
    ? 'Hide' : 'Show'
    return (
        <button onClick={() => {
            const changedCountryViews = countryViews.map((view, index) => index == indexCountry ? !view : view)
            setCountryViews(changedCountryViews)
        }
        }
        >{label}</button>
    )
}

export default CountryViewButton