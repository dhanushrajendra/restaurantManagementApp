import React, { Component } from "react";

class Store extends Component {
  render() {
    return (
      <React.Fragment>
        <form className="store-selector">
          <h1>Please enter a Store</h1>
          <input type="text" required placeholder="Store Name" />
          <button type="submit">Visit Store -></button>
        </form>
      </React.Fragment>
    );
  }
}

export default Store;
