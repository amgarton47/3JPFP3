const SET_STUDENTS = "SET_STUDENTS";

export const setStudents = (students) => ({
  action: SET_STUDENTS,
  students,
});

export const fetchStudents = () => {};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function studentsReducer(state = {}, action) {
  switch (action.type) {
    case SET_STUDENTS:
      return { students: action.students };
    default:
      return state;
  }
}
