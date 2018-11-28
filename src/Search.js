import React, { Component } from "react";

class Search extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <input className="form-input" type="text" placeholder="Filter results"
              onChange={event => this.props.updateQuery(event.target.value)} />
      </form>
    );
  }
}
export default Search;
