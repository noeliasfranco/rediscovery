import React from "react";
import {
    Route,
    IndexRedirect,
    Redirect
} from "react-router";
import App from "./containers/App";
import Main from './containers/main/Main';
import NotFound from "./containers/not_found/NotFound";

export default (
    <Route>
      <Route path="/" component={App}>
        <IndexRedirect to="/test"/>
        <Route path="test" components={{main: Main}}/>
      </Route>
      <Route path="*" component={NotFound}/>
  </Route>
);
