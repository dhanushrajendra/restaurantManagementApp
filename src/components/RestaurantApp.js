import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class RestaurantApp extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Daily" />
          </div>
          <Order />
          <Inventory />
        </div>
      </React.Fragment>
    );
  }
}

export default RestaurantApp;
