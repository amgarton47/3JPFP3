const SET_CAMPUSES = "SET_CAMPUSES";

export const setCampuses = (campuses) => ({
  action: SET_CAMPUSES,
  campuses,
});

export const fetchCampuses = () => {};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function campusesReducer(state = {}, action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return { campuses: action.campuses };
    default:
      return state;
  }
}
