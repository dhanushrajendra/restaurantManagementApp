import React, { Component } from "react";
import AddFoodForm from "./AddFoodForm";
import EditFishForm from "./EditFishForm";

class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(fish => (
          <EditFishForm
            key={fish}
            index={fish}
            fish={this.props.fishes[fish]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}
        <AddFoodForm addFish={this.props.addFish}></AddFoodForm>
        <button onClick={this.props.loadSample}>Load Sample</button>
      </div>
    );
  }
}

export default Inventory;
