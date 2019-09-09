import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sampleFishes";
import Fish from "./Fish";
import base from "../base";

class RestaurantApp extends Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  componentDidUpdate() {
    const { params } = this.props.match;
    localStorage.setItem(params.storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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

  removeFromOrder = key => {
    // taking a copy of exisiting state
    const order = { ...this.state.order };
    // adding a new fish or order to state and incrementing the order by one
    delete order[key];
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

  updateFish = (key, updatedFish) => {
    // copy of current fish
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes });
  };

  deleteFish = key => {
    const fishes = { ...this.state.fishes };
    fishes[key] = null;
    this.setState({ fishes });
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
          <Order
            fishes={this.state.fishes}
            order={this.state.order}
            removeFromOrder={this.removeFromOrder}
          />
          <Inventory
            addFish={this.addFish}
            updateFish={this.updateFish}
            deleteFish={this.deleteFish}
            loadSample={this.loadSample}
            fishes={this.state.fishes}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default RestaurantApp;
