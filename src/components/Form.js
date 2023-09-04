export const Form = (props) => {
    const handleGetCitySubmit = event => {
        event.preventDefault();
        const city = event.currentTarget.city.value.trim();
        props.getWeather(city)
    }
    return (
        <form onSubmit={handleGetCitySubmit}>
            <input type="text" name="city" placeholder="City"></input>
            <button type="submit">Get Weather</button>
        </form>
    )
}