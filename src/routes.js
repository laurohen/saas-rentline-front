/*!

=========================================================
* Paper Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Buttons from "views/components/Buttons.jsx";
import Calendar from "views/Calendar.jsx";
import Charts from "views/Charts.jsx";
import Dashboard from "views/Dashboard.jsx";
import ExtendedForms from "views/forms/ExtendedForms.jsx";
import ExtendedTables from "views/tables/ExtendedTables.jsx";
import FullScreenMap from "views/maps/FullScreenMap.jsx";
import GoogleMaps from "views/maps/GoogleMaps.jsx";
import GridSystem from "views/components/GridSystem.jsx";
import Icons from "views/components/Icons.jsx";
import LockScreen from "views/pages/LockScreen.jsx";
import Login from "views/pages/Login.jsx";
import Notifications from "views/components/Notifications.jsx";
import Panels from "views/components/Panels.jsx";
import ReactTables from "views/tables/ReactTables.jsx";
import Register from "views/pages/Register.jsx";
import RegularForms from "views/forms/RegularForms.jsx";
import RegularTables from "views/tables/RegularTables.jsx";
import SweetAlert from "views/components/SweetAlert.jsx";
import Timeline from "views/pages/Timeline.jsx";
import Typography from "views/components/Typography.jsx";
import UserProfile from "views/pages/UserProfile.jsx";
import ValidationForms from "views/forms/ValidationForms.jsx";
import VectorMap from "views/maps/VectorMap.jsx";
import Widgets from "views/Widgets.jsx";
import Wizard from "views/forms/Wizard.jsx";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  // Titular
  {
    collapse: true,
    name: "Titular",
    icon: "nc-icon nc-book-bookmark",
    state: "TitularCollapse",
    views: [
      {
        path: "/load",
        name: "Cadastro",
        mini: "C",
        component: Timeline,
        layout: "/admin1"
      },
      {
        path: "/load",
        name: "Relatorios",
        mini: "R",
        component: Login,
        layout: "/admin1"
      }
    ]
  },

  // Linhas
  {
    collapse: true,
    name: "Linhas",
    icon: "nc-icon nc-layout-11",
    state: "LinhasCollapse",
    views: [
      {
        path: "/load",
        name: "Cadastro",
        mini: "CD",
        component: Buttons,
        layout: "/admin1"
      },
      {
        path: "/load",
        name: "Relatorios",
        mini: "RE",
        component: GridSystem,
        layout: "/admin1"
      }
    ]
  },

  // Planos
  {
    collapse: true,
    name: "Planos",
    icon: "nc-icon nc-ruler-pencil",
    state: "planosCollapse",
    views: [
      {
        path: "/load",
        name: "Cadastro",
        mini: "CD",
        component: RegularForms,
        layout: "/admin1"
      },
      {
        path: "/load",
        name: "Relatorio",
        mini: "R",
        component: ExtendedForms,
        layout: "/admin1"
      }
    ]
  },

  // Faturas
  {
    collapse: true,
    name: "Faturas",
    icon: "nc-icon nc-single-copy-04",
    state: "tablesCollapse",
    views: [
      {
        path: "/load",
        name: "Cadastro",
        mini: "CD",
        component: RegularTables,
        layout: "/admin1"
      },
      {
        path: "/load",
        name: "Relatorios",
        mini: "R",
        component: ExtendedTables,
        layout: "/admin1"
      },
      {
        path: "/load",
        name: "Despesa Total",
        mini: "DP",
        component: ReactTables,
        layout: "/admin1"
      }
    ]
  },

  // Clientes
  {
    collapse: true,
    name: "Controle Clientes",
    icon: "nc-icon nc-pin-3",
    state: "ClientesCollapse",
    views: [
      {
        path: "/load",
        name: "Cadastro",
        mini: "CD",
        component: GoogleMaps,
        layout: "/admin1"
      },
      {
        path: "/load",
        name: "Relatorios",
        mini: "R",
        component: FullScreenMap,
        layout: "/admin1"
      }
    ]
  },

  // Contratos
  {
    collapse: true,
    name: "Contratos",
    icon: "nc-icon nc-pin-3",
    state: "contratosCollapse",
    views: [
      {
        path: "/load",
        name: "Gerar contrato",
        mini: "CD",
        component: GoogleMaps,
        layout: "/admin1"
      },
      {
        path: "/load",
        name: "Relatorios",
        mini: "R",
        component: FullScreenMap,
        layout: "/admin1"
      },
      {
        path: "/load",
        name: "Status Contratos",
        mini: "R",
        component: FullScreenMap,
        layout: "/admin1"
      }
    ]
  },

  // Faturas
  {
    collapse: true,
    name: "Faturas",
    icon: "nc-icon nc-pin-3",
    state: "faturasCollapse",
    views: [
      {
        path: "/load",
        name: "Gerar Fatura",
        mini: "CD",
        component: GoogleMaps,
        layout: "/admin1"
      },
      {
        path: "/load",
        name: "Relatorio  Faturas",
        mini: "R",
        component: FullScreenMap,
        layout: "/admin1"
      },
      {
        path: "/load",
        name: "Status Faturas",
        mini: "R",
        component: FullScreenMap,
        layout: "/admin1"
      }
    ]
  },

  // Clientes
  
  {
    path: "/load",
    name: "Usuarios",
    icon: "nc-icon nc-calendar-60",
    component: Calendar,
    layout: "/admin1"
  },
  
  // Configuracoes
  {
    path: "/load",
    name: "Configuracoes",
    icon: "nc-icon nc-box",
    component: Widgets,
    layout: "/admin1"
  },

  // Logout
  {
    path: "/load",
    name: "Logout",
    icon: "nc-icon nc-chart-bar-32",
    component: Charts,
    layout: "/admin1"
  }
];

export default routes;
