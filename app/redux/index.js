import { combineReducers } from "redux";
import campusesReducer from "./campuses";
import studentsReducer from "./students";

export default appReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
});
