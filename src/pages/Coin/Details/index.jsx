import { Divider, FormControl, MenuItem, Select, Typography } from "@mui/material";
import millify from "millify";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../../components";
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from "../../../services/cryptoApi";
import Info from "./Info";
import LineChart from "./LineChart";

function CoinDetailsPage() {
   const { coinId } = useParams();
   const [timePeriod, setTimePeriod] = useState("7d");
   const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
   const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod });
   const coinDetails = data?.data?.coin;

   const time = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];

   if (isFetching) return <Loader />;

   return (
      <>
         <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: 600, mt: 2 }}
            color="info.main"
            gutterBottom
         >
            {coinDetails.name} ({coinDetails.symbol}) Price
         </Typography>
         <Typography align="center" paragraph sx={{ mb: 4 }}>
            {coinDetails.name} live price in US dollars. View value statistics, market cap and
            supply.
         </Typography>
         <Divider />
         <FormControl sx={{ my: 2, minWidth: 120 }}>
            <Select defaultValue="7d" onChange={e => setTimePeriod(e.target.value)}>
               {time.map((option, index) => (
                  <MenuItem key={index} value={option}>
                     {option}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
         <LineChart
            coinHistory={coinHistory}
            currentPrice={millify(coinDetails.price, {
               precision: 3,
            })}
            coinName={coinDetails.name}
         />
         <Info coinDetails={coinDetails} />
      </>
   );
}

export default CoinDetailsPage;
