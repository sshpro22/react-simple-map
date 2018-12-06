import React from "react";
const Search =  props => {
    return (
      <div className="Filter-container" aria-label="Filter Bar">
        <input className="filter-input" type="text" placeholder="Filter"
              onChange={event => props.updateQuery(event.target.value)} />
      </div>
    );
}
export default Search;
