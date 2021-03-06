import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Users from "./components/Users/Users";
import Teams from "./components/Teams/Teams";
import PremierLeague from "./components/PremierLeague/PremierLeague";

const Routes = () => {
  console.log("routers");
  return (
    <Switch>
      <Route path="/premier-league" component={PremierLeague} />
      <Route path="/champions-league" component={PremierLeague} />
      <Route path="/euro-2020" component={PremierLeague} />
      <Route path="/teams" component={Teams} />
      <Route path="/users" component={Users} />
      <Route path="/" />
    </Switch>
  );
};
export default withRouter(Routes);
