import React from "react";
import { connect } from "react-redux";
import { fetchCampuses } from "../redux/campuses";

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.loadCampuses();
  }

  render() {
    return (
      <div>
        <h1>Campuses</h1>
        {this.props.campuses.map((campus) => (
          <div key={campus.id}>
            <b>{campus.name}</b>
            <img width="50px" height="50px" src={campus.imageUrl}></img>
            <p>{campus.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapState = (state) => ({ campuses: state.campuses });

const mapDispatch = (dispatch) => ({
  loadCampuses: () => dispatch(fetchCampuses()),
});

export default connect(mapState, mapDispatch)(AllCampuses);
