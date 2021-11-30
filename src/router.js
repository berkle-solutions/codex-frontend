import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./components/Routes";

export const Router = () => {
  //  }
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" isAuthenticated={false}>
          <div>usuário não autenticado</div>
        </PublicRoute>
        <PrivateRoute path="/dashboard" isAuthenticated={true} />
        <Route path="*">
          <div>
            <h1>Página não encontrada</h1>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
