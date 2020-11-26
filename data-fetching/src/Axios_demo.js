import { React, Component } from "react";
import axios from "axios";

const API_URL = "https://restcountries.eu/rest/v2/";

class Axios_demo extends Component {
  state = {
    countries: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(API_URL)
      .then((res) => this.setState({ countries: res.data, isLoading: false }));
  }
  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <ul>
          {this.state.countries.map((country) => (
            <li key={country.alpha3Code}>
              <h2>{country.name}</h2>
              <h2>{country.capital}</h2>
              <h2>{country.population}</h2>
              <img src={country.flag} alt={country.name} height="200" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Axios_demo;
