import { Box, Drawer, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "./AppBar";
import LinksList from "./LinksList";
import useStyles from "./styles";

function Navbar() {
   const classes = useStyles();
   const [screenSize, setScreenSize] = useState(window.innerWidth);
   const [navbarProps, setNavbarProps] = useState({
      open: true,
      variant: "permanent",
   });

   useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
   }, []);

   useEffect(() => {
      if (screenSize < 900) {
         setNavbarProps({
            variant: "temporary",
            open: false,
         });
      } else {
         setNavbarProps({
            variant: "permanent",
            open: true,
         });
      }
   }, [screenSize]);

   return (
      <>
         <Drawer variant={navbarProps.variant} open={navbarProps.open} className={classes.drawer}>
            <Typography
               variant="h5"
               sx={{ py: 2, px: 7, fontFamily: "DM Sans", color: "primary.contrastText" }}
               align="center"
            >
               <Link to="/">Cryptojet</Link>
            </Typography>
            <Box sx={{ mt: 2 }}>
               <LinksList />
            </Box>
         </Drawer>
         {screenSize < 900 && <AppBar />}
      </>
   );
}

export default Navbar;
