import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import asyncComponent from "./helpers/AsyncFunc";

const PublicRoutes = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route
          exact
          path={"/"}
          component={asyncComponent(() =>
            import("./containers/Calendar/Calendar")
          )}
        />
      </div>
    </ConnectedRouter>
  );
};

export default PublicRoutes;
