import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => {
   return {
      drawer: {
         "& .MuiDrawer-paper": { backgroundColor: "#00152B", borderRight: "none" },
      },
      linkList: {
         "& .MuiListItemButton-root": { color: "rgba(255,255,255,0.8)" },
         "& .MuiListItemIcon-root": { color: "rgba(255,255,255,0.75)", minWidth: "45px" },
         "& .Mui-selected": { backgroundColor: theme.palette.primary.main + "!important" },
      },
   };
});

export default useStyles;
