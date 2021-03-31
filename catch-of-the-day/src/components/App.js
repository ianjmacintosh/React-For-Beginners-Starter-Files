import React from "react";

import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = (fish) => {
    // Store the current fishes
    const fishes = { ...this.state.fishes };

    // Update that copy of the fishes with our new fish
    fishes[`fish${Date.now()}`] = fish;

    // Update the state with our new fishes
    this.setState({
      fishes,
    });

    console.log("Adding fish");
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <Header tagline="Fresh Seafood Market" />
        <Order></Order>
        <Inventory addFish={this.addFish}></Inventory>
      </div>
    );
  }
}

export default App;
