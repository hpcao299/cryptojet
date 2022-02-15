import { lazy } from "react";

const HomePage = lazy(() => import("./Home"));
const CryptocurrenciesPage = lazy(() => import("./Cryptocurrencies"));

const routes = [
   { path: "/", element: <HomePage /> },
   { path: "/cryptocurrencies", element: <CryptocurrenciesPage /> },
];

export default routes;
