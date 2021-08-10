import React from "react";
import { connect } from "react-redux";
import { createStudent } from "../redux/students";

class CreateStudentForm extends React.Component {
  constructor() {
    super();

    this.state = { firstName: "", lastName: "", email: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.submitForm(this.state);
    this.props.history.push("/students");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
          ></input>

          <br></br>
          <br></br>

          <label htmlFor="lastName">Last Name:</label>
          <input
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.handleChange}
          ></input>

          <br></br>
          <br></br>

          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="text"
            value={this.state.email}
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
  submitForm: (formData) => dispatch(createStudent(formData)),
});

export default connect(null, mapDispatch)(CreateStudentForm);
