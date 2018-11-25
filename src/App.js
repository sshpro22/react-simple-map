import React, { Component } from "react";
import "./App.css";
//axios is a promise based HTTP request library similar to fetch API
import axios from "axios";

class App extends Component {
  state: {
    venues: []
  };
  componentDidMount() {
    this.getVenues();
    this.renderMap();
  }
  renderMap = () => {
    //Call the loadAPIScript function with the script url containing the API key
    loadAPIScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCf3HZWXQWd8cc2scByGMv0EgACrFNjMMM&callback=initMap"
    );
    window.initMap = this.initMap;
  };
  /*
   * The getVenues makes an API request with parameters to fetch data
   * from foursquare using axios. Then it sets the venues state to the
   * fetched data. We are searching for food recomendations in Duba
   */
  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const params = {
      client_id: "B4IN5VTJDERKJIKLS1ZKJIGQU5SN3LGUMPMX2RC441DGQHPT",
      client_secret: "RYTDIWIJEMFFAYTZG5CHPRGMGXFOSO3ZG21AEHAKCWV0SSZB",
      v: "20180323",
      query: "food",
      near: "Duba, SA",
      limit: 6
    };
    axios
      .get(endPoint + new URLSearchParams(params))
      .then(res => {
        let results = res.data.response.groups[0].items;
        this.setState({ vanues: results });
        console.log(results);
      })
      .catch(error => {
        console.log(error);
      });
  };
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 27.3457,
        lng: 35.7243
      },
      zoom: 12
    });
  };
  render() {
    return (
      <main>
        <div id="map" />
      </main>
    );
  }
}

/*
 * The loadAPIScript gets the url. It creates a scrript tag
 * with a src attribute set to the url provided and async and defer set
 * to true.
 */

function loadAPIScript(url) {
  let index = window.document.getElementsByTagName("script")[0];
  let script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default App;
