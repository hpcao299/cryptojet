import { Box, Grid, Typography } from "@mui/material";
import millify from "millify";
import { Link } from "react-router-dom";
import { Cryptocurrencies, CryptoNews, Loader } from "../../components";
import Statistic from "../../components/Statistic";
import { useGetCryptosQuery } from "../../services/cryptoApi";

function HomePage() {
   const { data, isFetching } = useGetCryptosQuery(12);
   const globalStats = data?.data?.stats;

   if (isFetching) return <Loader />;

   return (
      <>
         <Typography variant="h4" sx={{ fontSize: [26, 30] }} gutterBottom>
            Global Crypto Stats
         </Typography>
         <Grid container sx={{ mb: 5 }}>
            <Grid item xs={12} sm={6}>
               <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
            </Grid>
            <Grid item xs={12} sm={6}>
               <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
            </Grid>
            <Grid item xs={12} sm={6}>
               <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
            </Grid>
            <Grid item xs={12} sm={6}>
               <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
            </Grid>
            <Grid item xs={12} sm={6}>
               <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
            </Grid>
         </Grid>
         <Box
            sx={{
               display: [null, "flex"],
               justifyContent: "space-between",
               mb: 2,
            }}
         >
            <Typography variant="h4" sx={{ fontSize: [26, 30] }}>
               Top Cryptocurrencies in the World
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 400, textAlign: "right" }}>
               <Link to="/cryptocurrencies" className="primary-link">
                  Show More
               </Link>
            </Typography>
         </Box>
         <Cryptocurrencies simplified />
         <Box
            sx={{
               display: [null, "flex"],
               justifyContent: "space-between",
               mb: 2,
            }}
         >
            <Typography variant="h4" sx={{ fontSize: [26, 30] }}>
               Latest Crypto News
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 400, textAlign: "right" }}>
               <Link to="/news" className="primary-link">
                  Show More
               </Link>
            </Typography>
         </Box>
         <CryptoNews simplified />
      </>
   );
}

export default HomePage;
