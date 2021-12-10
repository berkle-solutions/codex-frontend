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
  const isLoading = state.loading;

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          alt="loading"
          width={100}
          height={100}
          src={require("assets/loading.gif").default}
        />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" isAuthenticated={isAuthenticated}>
          <Login />
        </PublicRoute>
        <PrivateRoute path="/admin" isAuthenticated={isAuthenticated} />
        <Route path="*">
          <div>
            <h1>Página não encontrada</h1>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
