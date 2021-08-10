import React from "react";
import { connect } from "react-redux";
import { fetchStudent } from "../redux/singleStudent";
import { Link } from "react-router-dom";

class SingleStudent extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.loadStudent(this.props.match.params.id);
  }

  render() {
    const { firstName, lastName, email, imageUrl, gpa, campus } =
      this.props.student;

    return (
      <div>
        <p>
          Name: {firstName} {lastName}
        </p>
        <p>{email}</p>
        <img src={imageUrl}></img>
        <p>Gpa: {gpa}</p>
        {this.props.student.campus ? (
          <Link to={`/campuses/${this.props.student.campus.id}`}>
            {this.props.student.campus.name}
          </Link>
        ) : (
          "No affiliated campus."
        )}
      </div>
    );
  }
}

const mapState = (state) => ({
  student: state.student,
});

const mapDispatch = (dispatch) => ({
  loadStudent: (id) => dispatch(fetchStudent(id)),
});

export default connect(mapState, mapDispatch)(SingleStudent);
