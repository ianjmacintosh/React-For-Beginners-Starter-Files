import React from "react";

class EditFishForm extends React.Component {
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
      </div>
    );
  }
}

export default EditFishForm;
