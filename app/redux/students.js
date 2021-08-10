import axios from "axios";

const SET_STUDENTS = "SET_STUDENTS";

export const setStudents = (students) => ({
  type: SET_STUDENTS,
  students,
});

export const fetchStudents = () => (dispatch) => {
  axios
    .get("/api/students")
    .then(({ data }) => dispatch(setStudents(data)))
    .catch((err) => console.log(err));
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function studentsReducer(state = [], action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    default:
      return state;
  }
}
