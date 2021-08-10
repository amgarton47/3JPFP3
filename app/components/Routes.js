import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllCampuses from "./AllCampuses";
import AllStudents from "./AllStudents";

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
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <p>This seems like a nice place to get started with some Routes!</p>
        </main>

        {/* SWITCH */}
        <Switch>
          <Route exact path="/campuses" component={AllCampuses}></Route>
          <Route exact path="/students" component={AllStudents}></Route>
          <Route exact path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;
