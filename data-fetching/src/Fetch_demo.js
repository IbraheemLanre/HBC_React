import { React, Component } from "react";

const API_URL = "https://restcountries.eu/rest/v2/";
const QUERY = "all";

class Fetch_demo extends Component {
  state = {
    countries: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API_URL + QUERY)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          countries: data,
          isLoading: false,
        })
      );
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

export default Fetch_demo;
