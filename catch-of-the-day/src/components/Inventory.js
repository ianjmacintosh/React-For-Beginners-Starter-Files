import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {
  render() {
    const fishList = Object.keys(this.props.fishes);
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish}></AddFishForm>
        {fishList.map((fish) => {
          return (
            <EditFishForm
              key={fish}
              fishId={fish}
              fish={this.props.fishes[fish]}
              updateFish={this.props.updateFish}
              deleteFish={this.props.deleteFish}
            ></EditFishForm>
          );
        })}
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;
