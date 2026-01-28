const Weather = ({ country, weather }) => {
    console.log(weather)
    return (
        <div>
            <h2>Weather in {country.capital}</h2>
            <div>Temperature {weather.main.temp}</div>
            <div>
                <img src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`} />
            </div>
            <div>Wind {weather.wind.speed} m/s</div>
        </div >
    )
}

export default Weather