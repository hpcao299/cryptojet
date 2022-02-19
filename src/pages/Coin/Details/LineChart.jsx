import { Box, Typography } from "@mui/material";
import {
   CategoryScale,
   Chart,
   LinearScale,
   LineController,
   LineElement,
   PointElement,
   Title,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

function LineChart({ currentPrice, coinName, coinHistory }) {
   const coinPrice = [];
   const coinTimestamp = [];

   for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinPrice.push(coinHistory?.data?.history[i].price);
      coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
   }

   const data = {
      labels: coinTimestamp,
      datasets: [
         {
            label: "Price In USD",
            data: coinPrice,
            fill: false,
            backgroundColor: "#0071bd",
            borderColor: "#0071bd",
         },
      ],
   };

   const options = {
      tooltips: {
         mode: "index",
      },
      yAxes: {
         ticks: {
            beginAtZero: true,
         },
      },
   };

   return (
      <>
         <Box sx={{ display: "flex", mb: 1 }}>
            <Typography color="info.main" variant="h5">
               {coinName} Price Chart
            </Typography>
            <Typography sx={{ ml: "auto", fontWeight: 500, mr: 2 }}>
               {coinHistory?.data?.change}%
            </Typography>
            <Typography sx={{ fontWeight: 500 }}>
               Current {coinName} Price: ${currentPrice}
            </Typography>
         </Box>
         <Line data={data} options={options} />
      </>
   );
}

export default LineChart;
