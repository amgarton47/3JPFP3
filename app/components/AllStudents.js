import React from "react";
import { connect } from "react-redux";
import { fetchStudents } from "../redux/students";
import { Link } from "react-router-dom";
import { deleteStudentThunk } from "../redux/students";

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
            <Link to={`/students/${student.id}`}>
              <b>{student.firstName}</b>
            </Link>
            <button
              onClick={() => {
                this.props.deleteStudent(student.id);
              }}
            >
              X
            </button>
          </div>
        ))}
        <br></br>
        <br></br>
        <Link to="/students/add">Add a Student</Link>
      </div>
    );
  }
}

const mapState = (state) => ({
  students: state.students,
});

const mapDispatch = (dispatch) => ({
  loadStudents: () => dispatch(fetchStudents()),
  deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
});

export default connect(mapState, mapDispatch)(AllStudents);
