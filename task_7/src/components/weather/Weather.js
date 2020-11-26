import { React, Component } from "react";
import axios from "axios";

const API_URL = "http://api.weatherstack.com/current";

const params = {
  access_key: process.env.REACT_APP_API_KEY,
  query: "Helsinki",
};

class Weather extends Component {
  state = {
    weather: {
      request: {},
      location: {},
      current: {},
    },
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    axios.get(API_URL, { params }).then((res) =>
      this.setState({
        weather: res.data,
        isLoading: false,
      })
    );
  }

  render() {
    return this.state.isLoading ? (
      <p>Weather loading...</p>
    ) : (
      <p>
        Currently, it is {this.state.weather.current.weather_descriptions} in{" "}
        {this.state.weather.location.name} and the temparture is{" "}
        {this.state.weather.current.temperature}℃ and it feels like{" "}
        {this.state.weather.current.feelslike}℃
      </p>
    );
  }
}

export default Weather;
