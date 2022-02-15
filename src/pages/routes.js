import { lazy } from "react";

const HomePage = lazy(() => import("./Home"));

const routes = [{ path: "/", element: <HomePage /> }];

export default routes;
