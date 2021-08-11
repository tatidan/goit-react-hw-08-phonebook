import { lazy } from "react";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    restricted: true,
    redirect: "/",
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChuckName: "HomePage"*/)
    ),
  },
  {
    name: "register",
    path: "/register",
    exact: true,
    restricted: true,
    redirect: "/contacts",
    component: lazy(() =>
      import("../pages/RegisterPage" /* webpackChuckName: "RegisterPage"*/)
    ),
  },
  {
    name: "login",
    path: "/login",
    exact: false,
    restricted: true,
    redirect: "/contacts",
    component: lazy(() =>
      import("../pages/LoginPage" /* webpackChuckName: "LoginPage"*/)
    ),
  },
  // {
  //   name: "contacts",
  //   path: "/contacts",
  //   exact: true,
  //   component: lazy(() =>
  //     import("../pages/ContactsPage" /* webpackChuckName: "ContactsPage"*/)
  //   ),
  // },
];
