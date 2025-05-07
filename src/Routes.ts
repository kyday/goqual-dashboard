import React from "react";

const Dashboard = React.lazy(() => import("@/pages/dashboard/dashboard"));
const Control = React.lazy(() => import("@/pages/control/control"));

const routes = [
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/control", name: "Control", element: Control },
];

export default routes;
