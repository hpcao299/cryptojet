import { lazy } from "react";
import CoinPage from "./Coin";
import NotFound from "./NotFound";

const HomePage = lazy(() => import("./Home"));
const CryptocurrenciesPage = lazy(() => import("./Cryptocurrencies"));
const NewsPage = lazy(() => import("./News"));
const CoinDetailsPage = lazy(() => import("./Coin/Details"));
const ExchangesPage = lazy(() => import("./Exchanges"));

const routes = [
   { path: "/", element: <HomePage /> },
   { path: "/cryptocurrencies", element: <CryptocurrenciesPage /> },
   { path: "/exchanges", element: <ExchangesPage /> },
   { path: "/news", element: <NewsPage /> },
   {
      path: "/coin",
      element: <CoinPage />,
      children: [{ path: ":coinId", element: <CoinDetailsPage /> }],
   },
   { path: "*", element: <NotFound /> },
];

export default routes;
