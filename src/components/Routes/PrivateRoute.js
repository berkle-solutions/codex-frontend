import { Route, Redirect } from "react-router-dom";
import AdminLayout from "../../layouts/Admin.js";

function PrivateRoute({ isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <AdminLayout {...props} />
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
