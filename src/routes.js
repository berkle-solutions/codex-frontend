// import Notifications from "views/Notifications.js";
// import Icons from "views/Icons.js";
// import Typography from "views/Typography.js";
// import TableList from "views/Tables.js";
// import Maps from "views/Map.js";
// import UserPage from "views/User.js";
// adicionar aqui o caminho até a view
//import { Table } from "reactstrap";

import Dashboard from "views/PrivateViews/Dashboard.js";
import Cadastro from "views/PrivateViews/Cadastro.js";
import Armario from "views/PrivateViews/Armario";
import Encomenda from "views/PrivateViews/Encomenda";
import EncomendaDetalhe from "views/PrivateViews/EncomendaDetalhe";
import Triagem from "views/PrivateViews/Triagem";
import Estoque from "views/PrivateViews/Estoque";
import Resgate from "views/PrivateViews/Resgate";

import { userRoutesAccess } from "./variables/enums";

const allRoutes = {
  dashboard: {
    path: "/",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
    show: true,
  },
  cadastro: {
    path: "/cadastro",
    name: "Cadastro de Pessoas",
    icon: "nc-icon nc-badge",
    component: Cadastro,
    layout: "/admin",
    show: true,
  },
  armario: {
    path: "/armario",
    name: "Armario",
    icon: "nc-icon nc-box",
    component: Armario,
    layout: "/admin",
    show: true,
  },
  encomenda: {
    path: "/encomenda",
    name: "Cadastro Encomendas",
    icon: "nc-icon nc-bag-16",
    component: Encomenda,
    layout: "/admin",
    show: true,
  },
  encomenda_detalhe: {
    path: "/encomenda/detalhe/:id",
    name: "Detalhe Encomendas",
    icon: "nc-icon nc-bag-16",
    component: EncomendaDetalhe,
    layout: "/admin",
    show: false,
  },
  estoque: {
    path: "/estoque",
    name: "Cadastro Estoque",
    icon: "nc-icon nc-bag-16",
    component: Estoque,
    layout: "/admin",
    show: true,
  },
  triagem: {
    path: "/triagem",
    name: "Lista de Encomendas",
    icon: "nc-icon nc-tile-56",
    component: Triagem,
    layout: "/admin",
    show: true,
  },
  resgate: {
    path: "/encomenda/resgate/:id",
    name: "Resgate de encomenda",
    icon: "nc-icon nc-tile-56",
    component: Resgate,
    layout: "/admin",
    show: false,
  },
};

const routes = (userRole) => [
  ...userRoutesAccess[userRole]?.map((route) => allRoutes[route]),
];

// {
//   path: "/dashboard",
//   name: "Dashboard",
//   icon: "nc-icon nc-bank",
//   component: Dashboard,
//   layout: "/admin",
// },
// {
//   path: "/icons",
//   name: "Icons",
//   icon: "nc-icon nc-diamond",
//   component: Icons,
//   layout: "/admin",
// },
// {
//   path: "/maps",
//   name: "Maps",
//   icon: "nc-icon nc-pin-3",
//   component: Maps,
//   layout: "/admin",
// },
// {
//   path: "/notifications",
//   name: "Notifications",
//   icon: "nc-icon nc-bell-55",
//   component: Notifications,
//   layout: "/admin",
// },
// {
//   path: "/user-page",
//   name: "User Profile",
//   icon: "nc-icon nc-single-02",
//   component: UserPage,
//   layout: "/admin",
// },
// {
//   path: "/tables",
//   name: "Lista Encomendas",
//   icon: "nc-icon nc-tile-56",
//   component: TableList,
//   layout: "/admin",
// },
// {
//   path: "/typography",
//   name: "Typography",
//   icon: "nc-icon nc-caps-small",
//   component: Typography,
//   layout: "/admin",
// },

export default routes;
