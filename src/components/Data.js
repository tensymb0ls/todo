import React from "react";
import { api_key, base_url } from "../utils/constants";
import { Weather } from "./Weather";
import { Form } from "./Form";

export class Data extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: {
                city: null,
                country: null,
                temp: null,
                pressure: null,
                sunset: null
            }
        }
    }
    // Functions
    getWeath = city => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    weatherInfo: {
                        city: data.name,
                        country: data.sys.country,
                        temp: data.main.temp,
                        pressure: data.main.pressure,
                        sunset: data.sys.sunset
                    }
                })
            })
    }
    // Render JSX
    render() {
        // setInterval(()=>{this.getWeath("Kishinev")}, 1000)
        return <div>
            <Form getWeather={this.getWeath} />
            <Weather weather={this.state.weatherInfo} />
        </div>
    }
}