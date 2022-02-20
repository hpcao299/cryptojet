import MenuIcon from "@mui/icons-material/Menu";
import { AppBar as NavBar, IconButton, Menu, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import LinksList from "./LinksList";
import useStyles from "./styles";

function AppBar() {
   const classes = useStyles();
   const [anchorEl, setAnchorEl] = useState(null);
   const openMenu = Boolean(anchorEl);

   const handleClick = e => setAnchorEl(e.currentTarget);
   const handleClose = () => setAnchorEl(null);

   return (
      <NavBar position="static" className={classes.mobileNavbar}>
         <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: "DM Sans" }}>
               <Link to="/">Cryptojet</Link>
            </Typography>
            <IconButton size="large" edge="start" color="inherit" onClick={handleClick}>
               <MenuIcon />
            </IconButton>
            <Menu
               open={openMenu}
               MenuListProps={{
                  "aria-labelledby": "fade-button",
               }}
               anchorEl={anchorEl}
               onClose={handleClose}
               className={classes.mobileMenu}
            >
               <LinksList />
            </Menu>
         </Toolbar>
      </NavBar>
   );
}

export default AppBar;
