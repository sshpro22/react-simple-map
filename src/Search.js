import React, { Component } from "react";

class Search extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <input className="form-input" type="text" />
        <button className="btn">Filter</button>
      </form>
    );
  }
}
export default Search;
