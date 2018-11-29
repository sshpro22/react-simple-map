import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./SideMenu.css";
import Search from "./Search";
class SideMenu extends Component {
  /*
   * openMarker functio triggers the click event on marker when
   * a list item is clicked
   */
  openMarker = venue => {
    this.props.markers.forEach(marker => {
      if (marker.title === venue) {
        window.google.maps.event.trigger(marker, "click");
      }
    });
  };

  render() {
    const venues = this.props.venues;
    console.log(venues);
    return (
      <Menu width={"25%"} isOpen noOverlay>
        <Search updateQuery={this.props.updateQuery} />
        <ul>
          {venues.map(place => (
            <li
              id="home"
              key={place.venue.id}
              className="menu-item"
              onClick={() => this.openMarker(place.venue.name)}
            >
              {place.venue.name}
            </li>
          ))}
        </ul>
      </Menu>
    );
  }
}
export default SideMenu;
