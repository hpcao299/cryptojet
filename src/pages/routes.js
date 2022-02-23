import CoinPage from "./Coin";
import CoinDetailsPage from "./Coin/Details";
import CryptocurrenciesPage from "./Cryptocurrencies";
import ExchangesPage from "./Exchanges";
import HomePage from "./Home";
import NewsPage from "./News";
import NotFound from "./NotFound";

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
