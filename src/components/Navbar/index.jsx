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
import { useState } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

function Navbar() {
   const classes = useStyles();
   const [selectedIndex, setSelectedIndex] = useState(0);

   const handleLinkItemClick = index => setSelectedIndex(index);

   return (
      <Drawer variant="permanent" className={classes.drawer}>
         <Typography
            variant="h5"
            sx={{ py: 2, px: 6.5, fontFamily: "DM Sans", color: "primary.contrastText" }}
            align="center"
         >
            <Link to="/">Cryptojet</Link>
         </Typography>
         <Box sx={{ mt: 2 }}>
            <List className={classes.linkList}>
               <ListItemButton
                  component={Link}
                  to="/"
                  selected={selectedIndex === 0}
                  onClick={() => handleLinkItemClick(0)}
               >
                  <ListItemIcon>
                     <HomeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
               </ListItemButton>
               <ListItemButton
                  component={Link}
                  to="/cryptocurrencies"
                  selected={selectedIndex === 1}
                  onClick={() => handleLinkItemClick(1)}
               >
                  <ListItemIcon>
                     <InsertChartOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cryptocurrencies" />
               </ListItemButton>
               <ListItemButton
                  component={Link}
                  to="/exchanges"
                  selected={selectedIndex === 3}
                  onClick={() => handleLinkItemClick(3)}
               >
                  <ListItemIcon>
                     <CurrencyExchangeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Exchanges" />
               </ListItemButton>
               <ListItemButton
                  component={Link}
                  to="/news"
                  selected={selectedIndex === 4}
                  onClick={() => handleLinkItemClick(4)}
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
