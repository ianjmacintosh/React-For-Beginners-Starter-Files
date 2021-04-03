import React from "react";

import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  componentDidMount() {
    const params = this.props.match.params;
    const localStorageRef = localStorage.getItem(params.storeId);
    console.log(localStorageRef);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
  }

  componentDidUpdate() {
    const params = this.props.match.params;
    console.log(this.state.order);
    localStorage.setItem(params.storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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

  updateFish = (fishId, updatedFish) => {
    const fishes = { ...this.state.fishes };

    fishes[fishId] = updatedFish;

    this.setState({
      fishes,
    });
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
        <Order order={this.state.order} fishes={this.state.fishes}></Order>
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          fishes={this.state.fishes}
          loadSamples={this.loadSamples}
        ></Inventory>
      </div>
    );
  }
}

export default App;
