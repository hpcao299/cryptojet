import { Box, Grid, Typography } from "@mui/material";
import millify from "millify";
import { Link } from "react-router-dom";
import { Cryptocurrencies } from "../../components";
import Statistic from "../../components/Statistic";
import { useGetCryptosQuery } from "../../services/cryptoApi";

function HomePage() {
   const { data, isFetching } = useGetCryptosQuery(12);
   const globalStats = data?.data?.stats;

   if (isFetching) return <div>Loading...</div>;

   return (
      <>
         <Typography variant="h4" sx={{ fontSize: "30px" }} gutterBottom>
            Global Crypto Stats
         </Typography>
         <Grid container sx={{ mb: 5 }}>
            <Grid item lg={6}>
               <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
            </Grid>
            <Grid item lg={6}>
               <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
            </Grid>
            <Grid item lg={6}>
               <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
            </Grid>
            <Grid item lg={6}>
               <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
            </Grid>
            <Grid item lg={6}>
               <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
            </Grid>
         </Grid>
         <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography variant="h4" sx={{ fontSize: "30px" }}>
               Top 10 Cryptocurrencies in the world
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 400 }}>
               <Link to="/cryptocurrencies" className="primary-link">
                  Show More
               </Link>
            </Typography>
         </Box>
         <Cryptocurrencies simplified />
      </>
   );
}

export default HomePage;
