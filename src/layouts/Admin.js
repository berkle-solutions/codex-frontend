import React, { useEffect } from "react";

import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, useLocation } from "react-router-dom";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";
import { useMainContext } from "../store/MainContext";

var ps;

function Dashboard(props) {
  const mainPanel = React.useRef();
  const location = useLocation();

  const { state } = useMainContext();

  const userRole = state?.user?.perfil?.descricao;

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });

  useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);

  const routesByRole = routes(userRole);

  return (
    <div className="wrapper">
      <Sidebar
        {...props}
        routes={routesByRole}
        bgColor={"black"}
        activeColor={"info"}
      />
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar {...props} routes={routesByRole} />
        <Switch>
          {routesByRole.map((prop, key) => (
            <Route
              exact
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          ))}
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
