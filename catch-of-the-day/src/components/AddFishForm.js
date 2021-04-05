import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func,
  };

  createFish = (event) => {
    // Stop the form from submitting
    event.preventDefault();

    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    this.props.addFish(fish);

    // Reset the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form action="" className="fish-edit" onSubmit={this.createFish}>
        <input
          name="name"
          placeholder="name"
          type="text"
          ref={this.nameRef}
        ></input>
        <input
          name="price"
          placeholder="price"
          type="text"
          ref={this.priceRef}
        ></input>
        <select
          name="status"
          placeholder="status"
          type="text"
          ref={this.statusRef}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" placeholder="desc" ref={this.descRef}></textarea>
        <input
          name="image"
          placeholder="image"
          type="text"
          ref={this.imageRef}
        ></input>
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
