import { Box, Grid, Link, Typography } from "@mui/material";
import { Link as RouteLink } from "react-router-dom";

function Footer() {
   return (
      <Box sx={{ backgroundColor: "#00152B", py: 3 }} component="footer">
         <Typography variant="h6" align="center" color="primary.contrastText">
            Cryptojet
         </Typography>
         <Typography align="center" color="#dbe3e8" gutterBottom>
            © All rights reserved
         </Typography>
         <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid item>
               <Link component={RouteLink} to="/">
                  Home
               </Link>
            </Grid>
            <Grid item>
               <Link component={RouteLink} to="/exchanges">
                  Exchanges
               </Link>
            </Grid>
            <Grid item>
               <Link component={RouteLink} to="/news">
                  News
               </Link>
            </Grid>
         </Grid>
      </Box>
   );
}

export default Footer;
