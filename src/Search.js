import React, { Component } from "react";

class Search extends Component {

  render() {
    return (
      <div className="Filter-container" aria-label="Filter Bar">
        <input className="filter-input" type="text" placeholder="Filter"
              onChange={event => this.props.updateQuery(event.target.value)} />
      </div>
    );
  }
}
export default Search;
