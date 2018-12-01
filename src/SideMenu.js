import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./SideMenu.css";
import Search from "./Search";
class SideMenu extends Component {
  state = {
    menuOpen: false
  };
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
  /*
   * This keeps the state in sync with the opening/closing of the menu
   * via the default means, e.g. clicking the X, pressing the ESC key etc.
   */
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This is used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    const venues = this.props.venues;
    console.log(venues);
    return (
      <Menu aria-label="Side Menu"
        width={310}
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
        noOverlay
      >
        <Search updateQuery={this.props.updateQuery} />
        <ul>
          {venues.map(place => (
            <li
              id="home"
              aria-label={place.venue.name}
              tabIndex="0"
              key={place.venue.id}
              className="menu-item"
              onClick={() => {
                this.openMarker(place.venue.name);
                this.closeMenu();
              }}
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
