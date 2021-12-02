import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./components/Routes";
import { useMainContext } from "./store/MainContext";
import { getToken } from "./services/auth";
// views
import Login from "./views/PublicViews/Login";

export const Router = () => {
  const { state } = useMainContext();
  const isAuthenticated = state.token || getToken();

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" isAuthenticated={isAuthenticated}>
          <Login />
        </PublicRoute>
        <PrivateRoute path="/dashboard" isAuthenticated={isAuthenticated} />
        <Route path="*">
          <div>
            <h1>Página não encontrada</h1>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
