import axios from "axios";

const SET_STUDENT = "SET_STUDENT";

export const setStudent = (student) => ({
  type: SET_STUDENT,
  student,
});

export const fetchStudent = (id) => async (dispatch) => {
  axios
    .get(`/api/students/${id}`)
    .then(({ data }) => dispatch(setStudent(data)))
    .catch((err) => console.log(err));
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function campusReducer(state = {}, action) {
  switch (action.type) {
    case SET_STUDENT:
      return action.student;
    default:
      return state;
  }
}
