export const Weather = ({ weather }) => {
    const { city, country, temp, pressure, sunset } = weather;
    console.log(weather)
    return (
        <div className="infoWeath">
            <p>Location: {country} {city}</p>
            <p>Temp: {temp}</p>
            <p>Pressure: {pressure}</p>
            <p>Sunset: {sunset}</p>
        </div>
    )
}