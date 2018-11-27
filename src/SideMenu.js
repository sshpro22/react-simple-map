import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./SideMenu.css";
class SideMenu extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu width={ '25%' }>
        <form>
          <input className="form-input" type="text" />
          <button className="btn">Filter</button>
        </form>
        <ul>
          <li id="home" className="menu-item">
            Home
          </li>
          <li id="about" className="menu-item">
            About
          </li>
          <li id="contact" className="menu-item">
            Contact
          </li>
        </ul>
      </Menu>
    );
  }
}
export default SideMenu;
