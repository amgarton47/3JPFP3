import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";
import Home from "./Home";

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
          <Route exact path="/students" component={AllStudents}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
