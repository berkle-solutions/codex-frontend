import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
// adicionar aqui o caminho até a view
import Cadastro from "views/Cadastro.js";
import Login from "views/Login.js";
import Exemplo from "views/Exemplo";
import Armario from "views/Armario";
import Encomenda from "views/Encomenda";
import Triagem from "views/Triagem";
//import { Table } from "reactstrap";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Lista Encomendas",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/admin",
  },
  // adicionar aqui em baixo em ordem as novas telas
  {
    path: "/cadastro",
    name: "Cadastro de Pessoas",
    icon: "nc-icon nc-badge",
    component: Cadastro,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-lock-circle-open",
    component: Login,
    layout: "/admin",
  },
  {
    path: "/exemplo",
    name: "Exemplo",
    icon: "nc-icon nc-caps-small",
    component: Exemplo,
    layout: "/admin",
  },
  {
    path: "/armario",
    name: "Armario",
    icon: "nc-icon nc-box",
    component: Armario,
    layout: "/admin",
  },
  {
    path: "/encomenda",
    name: "Encomenda",
    icon: "nc-icon nc-bag-16",
    component: Encomenda,
    layout: "/admin",
  },
  {
    path: "/triagem",
    name: " Triagem",
    icon: "nc-icon nc-tile-56",
    component: Triagem,
    layout: "/admin",
  },
];
export default routes;
