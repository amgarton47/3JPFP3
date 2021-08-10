import React from "react";
import { connect } from "react-redux";
import { fetchStudents } from "../redux/students";

// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllStudents extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.loadStudents();
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        {this.props.students.map((student) => (
          <div key={student.id}>
            <b>{student.firstName}</b>
          </div>
        ))}
      </div>
    );
  }
}

const mapState = (state) => ({
  students: state.students,
});

const mapDispatch = (dispatch) => ({
  loadStudents: () => dispatch(fetchStudents()),
});

export default connect(mapState, mapDispatch)(AllStudents);
