import React from "react";
import { getFunName } from "../helpers";
import PropTypes from "prop-types";

class StorePicker extends React.Component {
  storeName = React.createRef();

  static propTypes = {
    history: PropTypes.array,
  };

  goToStore = (event) => {
    event.preventDefault();

    const storeName = this.storeName.current.value;

    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          ref={this.storeName}
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
