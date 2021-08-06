import { lazy } from "react";

export const mainRoutes = [
  {
    name: "register",
    path: "/register",
    exact: true,
    component: lazy(() =>
      import("../pages/RegisterPage" /* webpackChuckName: "HomePage"*/)
    ),
  },
  {
    name: "login",
    path: "/login",
    exact: false,
    component: lazy(() =>
      import("../pages/LoginPage" /* webpackChuckName: "MovieDetailsPage"*/)
    ),
  },
  {
    name: "contacts",
    path: "/contacts",
    exact: true,
    component: lazy(() =>
      import("../pages/ContactsPage" /* webpackChuckName: "MoviesPage"*/)
    ),
  },
];
