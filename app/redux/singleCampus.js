import axios from "axios";

const SET_CAMPUS = "SET_CAMPUS";

export const setCampus = (campus) => ({
  type: SET_CAMPUS,
  campus,
});

export const fetchCampus = (id) => async (dispatch) => {
  axios
    .get(`/api/campuses/${id}`)
    .then(({ data }) => dispatch(setCampus(data)))
    .catch((err) => console.log(err));
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function campusReducer(state = {}, action) {
  switch (action.type) {
    case SET_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
