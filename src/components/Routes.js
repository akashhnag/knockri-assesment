import React from 'react'
import {
    Switch,
    Route,
  } from "react-router-dom";

import Home from "./Home";
import Details from "./Details";
import Logout from "./Logout";

//routes mapped
function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/details/:id" component={Details}></Route>
            <Route exact path="/logout" component={Logout}></Route>
        </Switch>
    )
}

export default Routes
