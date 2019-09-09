import React, { Component } from "react";
// import Store from "./components/Store";
import RestaurantApp from "./components/RestaurantApp";
import "./css/style.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <RestaurantApp />
      </React.Fragment>
    );
  }
}

export default App;
