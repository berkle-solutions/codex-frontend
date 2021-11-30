import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./components/Routes";

import { retriveToken } from "./services/auth";

export const Router = () => {
  const isAuthenticated = retriveToken();

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" isAuthenticated={isAuthenticated}>
          <div>usuário não autenticado</div>
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
