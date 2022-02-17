import { lazy } from "react";

const HomePage = lazy(() => import("./Home"));
const CryptocurrenciesPage = lazy(() => import("./Cryptocurrencies"));
const NewsPage = lazy(() => import("./News"));

const routes = [
   { path: "/", element: <HomePage /> },
   { path: "/cryptocurrencies", element: <CryptocurrenciesPage /> },
   { path: "/news", element: <NewsPage /> },
];

export default routes;
