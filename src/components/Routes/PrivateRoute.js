import { Route, Redirect } from "react-router-dom";
import AdminLayout from "../../layouts/Admin.js";

import { MainContext } from "../../store/MainContext";

function PrivateRoute({ isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <MainContext>
            <AdminLayout {...props} />
          </MainContext>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
