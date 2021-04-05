import React from "react";
import PropTypes from "prop-types";
class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number,
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func,
  };
  handleChange = (event) => {
    console.log(event);
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };

    console.table(updatedFish);
    this.props.updateFish(this.props.fishId, updatedFish);
  };

  render() {
    const { name, price, status, desc, image } = this.props.fish;
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="price"
          value={price}
          onChange={this.handleChange}
        />
        <select
          name="status"
          id="status"
          value={status}
          onChange={this.handleChange}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          id=""
          onChange={this.handleChange}
          value={desc}
        ></textarea>
        <input
          type="text"
          name="image"
          value={image}
          onChange={this.handleChange}
        />
        <button
          onClick={() => {
            this.props.deleteFish(this.props.fishId);
          }}
        >
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
