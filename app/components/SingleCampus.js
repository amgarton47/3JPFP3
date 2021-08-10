import React from "react";
import { connect } from "react-redux";
import { fetchCampus } from "../redux/singleCampus";
import { Link } from "react-router-dom";

class SingleCampus extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.loadCampusData(this.props.match.params.id);
  }

  render() {
    const { name, imageUrl, address, description, students } =
      this.props.campus;

    return (
      <div>
        <b>{name}</b>
        <img width="50px" height="50px" src={imageUrl}></img>
        <p>{address}</p>
        <p>{description}</p>
        {this.props.campus.students &&
        this.props.campus.students.length != 0 ? (
          <div>
            Enrolled students:
            {students.map((student) => (
              <Link to={`/students/${student.id}`} key={student.id}>
                {student.firstName}
              </Link>
            ))}
          </div>
        ) : (
          <div>No students are currently enrolled.</div>
        )}
      </div>
    );
  }
}

const mapState = (state) => ({ campus: state.campus });

const mapDispatch = (dispatch) => ({
  loadCampusData: (id) => dispatch(fetchCampus(id)),
});

export default connect(mapState, mapDispatch)(SingleCampus);
