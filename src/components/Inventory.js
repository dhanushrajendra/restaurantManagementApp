import React, { Component } from "react";
import AddFoodForm from "./AddFoodForm";

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFoodForm addFish={this.props.addFish}></AddFoodForm>
        <button onClick={this.props.loadSample}>Load Sample</button>
      </div>
    );
  }
}

export default Inventory;
