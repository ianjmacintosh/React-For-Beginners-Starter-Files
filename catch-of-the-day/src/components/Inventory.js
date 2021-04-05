import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase";

import base, { firebaseApp } from "../base";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    addFish: PropTypes.func,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSamples: PropTypes.func,
    authenticate: PropTypes.func,
  };

  state = {
    uid: null,
    owner: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }

  authHandler = async (authData) => {
    // 1. Look up the current store in firebase db
    const store = await base.fetch(this.props.storeId, { context: this });
    console.log(store);
    // 2. Claim it if there is no owner
    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid,
      });
    }
    // 3. Set the state of the inventory to reflect current user
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid,
    });
  };

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  logout = async () => {
    console.log("Logging out");
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  render() {
    const logoutButton = <button onClick={this.logout}>Log Out</button>;

    // 1. Check if they're logged in
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate}></Login>;
    }

    // 2. Check if they are not the owner of the store
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry, you are not the owner</p>
          {logoutButton}
        </div>
      );
    }

    // 3. They must be the owner, just render the inventory
    const fishList = Object.keys(this.props.fishes);
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {logoutButton}
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
