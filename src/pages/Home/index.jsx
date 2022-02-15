import { Grid, Typography } from "@mui/material";

function Home() {
   return (
      <>
         <Typography variant="h4" sx={{ fontSize: "30px" }} gutterBottom>
            Global Crypto Stats
         </Typography>
         <Grid container>
            <Grid item lg={6}>
               <Typography variant="body2" sx={{ color: "#8A898C" }}>
                  Total Cryptocurrencies
               </Typography>
               <Typography variant="h5" gutterBottom>
                  5
               </Typography>
            </Grid>
            <Grid item lg={6}>
               <Typography variant="body2" sx={{ color: "#8A898C" }}>
                  Total Exchanges
               </Typography>
               <Typography variant="h5" gutterBottom>
                  5
               </Typography>
            </Grid>
            <Grid item lg={6}>
               <Typography variant="body2" sx={{ color: "#8A898C" }}>
                  Total Market Cap
               </Typography>
               <Typography variant="h5" gutterBottom>
                  5
               </Typography>
            </Grid>
            <Grid item lg={6}>
               <Typography variant="body2" sx={{ color: "#8A898C" }}>
                  Total 24h Volume
               </Typography>
               <Typography variant="h5" gutterBottom>
                  5
               </Typography>
            </Grid>
            <Grid item lg={6}>
               <Typography variant="body2" sx={{ color: "#8A898C" }}>
                  Total Markets
               </Typography>
               <Typography variant="h5" gutterBottom>
                  5
               </Typography>
            </Grid>
         </Grid>
      </>
   );
}

export default Home;
