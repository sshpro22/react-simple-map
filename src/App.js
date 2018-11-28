import React, { Component } from "react";
import "./App.css";
import SideMenu from "./SideMenu";
//axios is a promise based HTTP request library similar to fetch API
import axios from "axios";
//the escapeRegExp to escape any RegExp charactor in the query
import escapeRegExp from "escape-string-regexp";

class App extends Component {
  state = {
    venues: [],
    markers: [],
    query: ""
  };

  componentDidMount() {
    this.getVenues();
  }
  //update the query onChange
  updateQuery = query => {
    this.setState({ query: query.trim() });
  };
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
   * fetched data. We are searching for coffee recomendations in
   *  University Distract, Seattle
   */
  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const parameters = {
      client_id: "B4IN5VTJDERKJIKLS1ZKJIGQU5SN3LGUMPMX2RC441DGQHPT",
      client_secret: "RYTDIWIJEMFFAYTZG5CHPRGMGXFOSO3ZG21AEHAKCWV0SSZB",
      query: "food",
      ll: "47.658941, -122.312862",
      v: "20182507",
      limit: 6
    };

    axios
      .get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState(
          {
            venues: response.data.response.groups[0].items
          },
          this.renderMap()
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

  initMap = () => {
    // Create the map
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 47.658941, lng: -122.312862 },
      zoom: 14
    });
    //Make infowWindow
    const infowindow = new window.google.maps.InfoWindow({
      maxWidth: 175
    });
    //Looping over the venues to create a marker for each place and display them dynamically
    this.state.venues.forEach(place => {
      //Create the content for the InfoWindow
      let contentString = `<div class="infowindow-container"><h3>${
        place.venue.name
      }</h3><p>${place.venue.location.address}</p></div>`;
      const marker = new window.google.maps.Marker({
        position: {
          lat: place.venue.location.lat,
          lng: place.venue.location.lng
        },
        map: map,
        title: place.venue.name,
        animation: window.google.maps.Animation.DROP
      });
      this.state.markers.push(marker);
      //Add a click event to the marker to display the InfoWindow
      marker.addListener("click", () => {
        infowindow.setContent(contentString);
        infowindow.open(map, marker);
      });
    });
  };

  render() {
    const query = this.state.query;
    let showingPlaces;
    if (query) {
      //create a RegExp and use the escapeRegExp to escape any RegExp charactor in the query
      const match = new RegExp(escapeRegExp(query), "i");
      console.log("Venue value: ", this.state.venues);
      showingPlaces = this.state.venues.filter(place =>
        match.test(place.venue.name)
      );
    } else {
      showingPlaces = this.state.venues;
    }
    console.log('showingPlaces: ', showingPlaces);
    return (
      <div className="container">
        <SideMenu venues={showingPlaces} updateQuery={this.updateQuery} />
        <main>
          <div id="map" />
        </main>
      </div>
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
