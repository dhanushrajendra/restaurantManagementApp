import React, { Component } from "react";
import { getFunName } from "../helpers";

class Store extends Component {
  userInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    const storeName = this.userInput.current.defaultValue;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h1>Please enter a Store</h1>
          <input
            type="text"
            ref={this.userInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store -></button>
        </form>
      </React.Fragment>
    );
  }
}

export default Store;
