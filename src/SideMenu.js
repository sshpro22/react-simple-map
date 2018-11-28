import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./SideMenu.css";
import Search from "./Search";
class SideMenu extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    const venues = this.props.venues;
    return (
      <Menu width={"25%"} isOpen noOverlay>
        <Search updateQuery={this.props.updateQuery}/>
        <ul>
          {venues.map(place => (
            <li id="home" key={place.venue.id} className="menu-item">
              {place.venue.name}
            </li>
          ))}
        </ul>
      </Menu>
    );
  }
}
export default SideMenu;
