import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sampleFishes";
import Fish from "./Fish";

class RestaurantApp extends Component {
  state = {
    fishes: {},
    order: {}
  };

  addToOrder = key => {
    // taking a copy of exisiting state
    const order = { ...this.state.order };
    // adding a new fish or order to state and incrementing the order by one
    order[key] = order[key] + 1 || 1;
    // setting the new state
    this.setState({
      order: order
    });
  };

  addFish = fish => {
    // taking a copy of existing state
    const fishes = { ...this.state.fishes };
    // adding a new fish
    fishes[`fish${Date.now()}`] = fish;
    // setting the new state
    this.setState({
      fishes: fishes
    });
  };

  loadSample = () => {
    this.setState({
      fishes: sampleFishes
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh Daily" />
            <ul className="fishes">
              {Object.keys(this.state.fishes).map(key => (
                <Fish
                  key={key}
                  index={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder}
                />
              ))}
            </ul>
          </div>
          <Order fishes={this.state.fishes} order={this.state.order} />
          <Inventory addFish={this.addFish} loadSample={this.loadSample} />
        </div>
      </React.Fragment>
    );
  }
}

export default RestaurantApp;
