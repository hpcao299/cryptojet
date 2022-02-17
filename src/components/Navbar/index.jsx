import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import {
   Box,
   Drawer,
   List,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./styles";

function Navbar() {
   const { pathname } = useLocation();
   const classes = useStyles();
   const [currentPathname, setCurrentPathname] = useState(pathname);

   const handleLinkItemClick = pathname => setCurrentPathname(pathname);

   useEffect(() => {
      setCurrentPathname(pathname);
   }, [pathname]);

   return (
      <Drawer variant="permanent" className={classes.drawer}>
         <Typography
            variant="h5"
            sx={{ py: 2, px: 7, fontFamily: "DM Sans", color: "primary.contrastText" }}
            align="center"
         >
            <Link to="/">Cryptojet</Link>
         </Typography>
         <Box sx={{ mt: 2 }}>
            <List className={classes.linkList}>
               <ListItemButton
                  component={Link}
                  to="/"
                  selected={currentPathname === "/"}
                  onClick={() => handleLinkItemClick("/")}
               >
                  <ListItemIcon>
                     <HomeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
               </ListItemButton>
               <ListItemButton
                  component={Link}
                  to="/cryptocurrencies"
                  selected={currentPathname === "/cryptocurrencies"}
                  onClick={() => handleLinkItemClick("/cryptocurrencies")}
               >
                  <ListItemIcon>
                     <InsertChartOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cryptocurrencies" />
               </ListItemButton>
               <ListItemButton
                  component={Link}
                  to="/exchanges"
                  selected={currentPathname === "/exchanges"}
                  onClick={() => handleLinkItemClick("/exchanges")}
               >
                  <ListItemIcon>
                     <CurrencyExchangeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Exchanges" />
               </ListItemButton>
               <ListItemButton
                  component={Link}
                  to="/news"
                  selected={currentPathname === "/news"}
                  onClick={() => handleLinkItemClick("/news")}
               >
                  <ListItemIcon>
                     <LightbulbOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="News" />
               </ListItemButton>
            </List>
         </Box>
      </Drawer>
   );
}

export default Navbar;
