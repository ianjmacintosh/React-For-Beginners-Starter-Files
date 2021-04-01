import React from "react";

import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

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

  loadSamples = () => {
    this.setState({
      fishes: sampleFishes,
    });
  };

  addToOrder = (key) => {
    // 1. Take a copy of state
    const order = { ...this.state.order };
    // 2. Either add entry to order or update existing entry
    order[key] = order[key] + 1 || 1;
    // 3. Update state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((fish) => {
              return (
                <Fish
                  key={fish}
                  details={this.state.fishes[fish]}
                  addThisFishToOrder={() => this.addToOrder(fish)}
                />
              );
            })}
          </ul>
        </div>
        <Order></Order>
        <Inventory
          addFish={this.addFish}
          loadSamples={this.loadSamples}
        ></Inventory>
      </div>
    );
  }
}

export default App;
