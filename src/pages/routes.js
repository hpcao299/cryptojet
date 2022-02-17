import { lazy } from "react";
import NotFound from "./NotFound";

const HomePage = lazy(() => import("./Home"));
const CryptocurrenciesPage = lazy(() => import("./Cryptocurrencies"));
const NewsPage = lazy(() => import("./News"));

const routes = [
   { path: "/", element: <HomePage /> },
   { path: "/cryptocurrencies", element: <CryptocurrenciesPage /> },
   { path: "/news", element: <NewsPage /> },
   { path: "*", element: <NotFound /> },
];

export default routes;
