import React, { Component } from "react";
// import Store from "./components/Store";
// import RestaurantApp from "./components/RestaurantApp";
import Router from "./components/Router";
import "./css/style.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router />
      </React.Fragment>
    );
  }
}

export default App;
