import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { RoutesString } from "../../Modules/routesString";
import pages from "./pages";

function RoutesWrapper() {

  return (
    <>
      <Switch>
        {pages.map((item) => {
          return (
            <Route key={item.path} path={item.path} component={item.component} exact={item.exact}></Route>
          );
        })}
        <Redirect to={RoutesString.PageNotFound} />
      </Switch>

    </>
  );
}

export default RoutesWrapper;