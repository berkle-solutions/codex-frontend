import Dashboard from "views/PrivateViews/Dashboard.js";
import Cadastro from "views/PrivateViews/Cadastro.js";
import Armario from "views/PrivateViews/Armario";
import Encomenda from "views/PrivateViews/Encomenda";
import EncomendaDetalhe from "views/PrivateViews/EncomendaDetalhe";
import Triagem from "views/PrivateViews/Triagem";
import Resgate from "views/PrivateViews/Resgate";
import Pessoas from "views/PrivateViews/Pessoas";
import PessoaDetalhe from "views/PrivateViews/PessoaDetalhe";

import { userRoutesAccess } from "./variables/enums";

const allRoutes = {
  dashboard: {
    path: "/",
    name: "Dashboard",
    icon: "nc-icon nc-chart-bar-32",
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
  pessoas: {
    path: "/pessoas",
    name: "Lista de Usuários",
    icon: "nc-icon nc-single-02",
    component: Pessoas,
    layout: "/admin",
    show: true,
  },
  pessoas_detalhe: {
    path: "/pessoas/detalhe/:id",
    name: "Lista de Usuários",
    icon: "nc-icon nc-tile-56",
    component: PessoaDetalhe,
    layout: "/admin",
    show: false,
  },
};

const routes = (userRole) => [
  ...userRoutesAccess[userRole]?.map((route) => allRoutes[route]),
];

export default routes;
