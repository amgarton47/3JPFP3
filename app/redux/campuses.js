import axios from "axios";

const SET_CAMPUSES = "SET_CAMPUSES";
const ADD_CAMPUS = "ADD_CAMPUS";
const DELETE_CAMPUS = "DELETE_CAMPUS";

const setCampuses = (campuses) => ({
  type: SET_CAMPUSES,
  campuses,
});

export const addCampus = (campus) => ({
  type: ADD_CAMPUS,
  campus,
});

const deleteCampus = (id) => ({
  type: DELETE_CAMPUS,
  id,
});

export const fetchCampuses = () => async (dispatch) => {
  axios
    .get("/api/campuses")
    .then(({ data }) => dispatch(setCampuses(data)))
    .catch((err) => console.log(err));
};

export const createCampus = (campusData) => async (dispatch) => {
  axios
    .post("/api/campuses", campusData)
    .then(() => dispatch(addCampus(campusData)))
    .catch((err) => console.log(err));
};

export const deleteCampusThunk = (id) => async (dispatch) => {
  axios
    .delete(`/api/campuses/${id}`)
    .then(() => dispatch(deleteCampus(id)))
    .catch((err) => console.log(err));
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function campusesReducer(state = [], action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    case ADD_CAMPUS:
      return [...state, action.campus];
    case DELETE_CAMPUS:
      return [...state].filter((el) => el.id !== action.id);
    default:
      return state;
  }
}
