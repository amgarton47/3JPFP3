import React from "react";
import { connect } from "react-redux";
import { createCampus } from "../redux/campuses";

class CreateCampusForm extends React.Component {
  constructor() {
    super();

    this.state = { name: "", address: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.submitForm(this.state);
    this.props.history.push("/campuses");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>

          <br></br>
          <br></br>

          <label htmlFor="address">Address:</label>
          <input
            name="address"
            type="text"
            value={this.state.address}
            onChange={this.handleChange}
          ></input>

          <br></br>
          <br></br>

          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  submitForm: (formData) => dispatch(createCampus(formData)),
});

export default connect(null, mapDispatch)(CreateCampusForm);
