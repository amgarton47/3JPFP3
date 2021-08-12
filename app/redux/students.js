import axios from "axios";

const ADD_STUDENT = "ADD_STUDENT";
const SET_STUDENTS = "SET_STUDENTS";
const DELETE_STUDENT = "DELETE_STUDENT";

const setStudents = (students) => ({
  type: SET_STUDENTS,
  students,
});

const addStudent = (student) => ({
  type: ADD_STUDENT,
  student,
});

const deleteStudent = (id) => ({
  type: DELETE_STUDENT,
  id,
});

export const fetchStudents = () => (dispatch) => {
  axios
    .get("/api/students")
    .then(({ data }) => dispatch(setStudents(data)))
    .catch((err) => console.log(err));
};

export const createStudent = (studentData) => (dispatch) => {
  axios
    .post("/api/students", studentData)
    .then(() => dispatch(addStudent(studentData)))
    .catch((err) => console.log(err));
};

export const deleteStudentThunk = (id) => async (dispatch) => {
  axios
    .delete(`/api/students/${id}`)
    .then(() => dispatch(deleteStudent(id)))
    .catch((err) => console.log(err));
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function studentsReducer(state = [], action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    case ADD_STUDENT:
      return [...state, action.student];
    case DELETE_STUDENT:
      return [...state].filter((el) => el.id !== action.id);
    default:
      return state;
  }
}
