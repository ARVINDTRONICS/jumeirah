import React, { lazy } from "react";

// const HomeLayout = lazy(() => import("containers/Home"));
const LogIn = lazy(() => import("../containers/LogIn"));
const Home = lazy(() => import("../containers/Home"));

export default [
  {
    name: "login",
    path: "/login",
    component: LogIn,
    exact: true,
    authentication: false
  },
  {
    name: "home",
    path: "/home",
    component: Home,
    exact: true,
    authentication: true
  },
  {
    name: "default",
    path: ["/", "/index.html"],
    default: true,
    component: LogIn,
    authentication: false
  }
];
