import React, { Component } from "react";
import "./App.css";

class App extends Component {

  componentDidMount () {
    this.renderMap()
  }
  renderMap = () => {
    //Call the loadAPIScript function with the script url containing the API key
    loadAPIScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCf3HZWXQWd8cc2scByGMv0EgACrFNjMMM&callback=initMap")
    window.initMap = this.initMap;
  }
  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 8
    });
  }
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
 * index.parentNode.insertBefore(script, index) : Instead of appendChild.
 * [script: newNode
 * index: referenceNode]
 * With "index" we select the first script tag, with "parentNode"
 * we select the parent node, with "insertBefore" we put our script
 * at the very beginning, to the top of the lists.
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
