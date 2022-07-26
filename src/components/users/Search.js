import React, { Component } from "react";

export class Search extends Component {
  render() {
    return (
      <div>
        <form className="from">
          <input type="text" name="text" placeholder="Search User..." />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
