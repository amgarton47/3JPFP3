import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";
import CreateCampusForm from "./CreateCampusForm";
import CreateStudentForm from "./CreateStudentForm";
import Home from "./Home";
import SingleCampus from "./SingleCampus";
import SingleStudent from "./SingleStudent";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <div>Welcome!</div>
          <Link to="/campuses">Campuses</Link>
          <Link to="/students">Students</Link>
          <Link to="/">Home</Link>
        </nav>

        <Switch>
          <Route exact path="/campuses" component={AllCampuses}></Route>
          <Route
            exact
            path="/campuses/add"
            component={CreateCampusForm}
          ></Route>
          <Route exact path="/campuses/:id" component={SingleCampus}></Route>

          <Route exact path="/students" component={AllStudents}></Route>
          <Route
            exact
            path="/students/add"
            component={CreateStudentForm}
          ></Route>
          <Route exact path="/students/:id" component={SingleStudent}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
