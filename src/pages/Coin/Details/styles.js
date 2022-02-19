import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
   statistics: {
      display: "flex",
      alignItems: "left",
      flexDirection: "column",
      [theme.breakpoints.down("lg")]: {
         alignItems: "center",
         textAlign: "center",
      },
   },
   statisticsList: {
      [theme.breakpoints.down("lg")]: {
         minWidth: "430px",
      },
      [theme.breakpoints.down("md")]: {
         minWidth: "500px",
      },

      "& .MuiListItem-root": {
         padding: "12px 16px",
         justifyContent: "space-between",
         borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
      },

      "& .MuiListItem-root:not(:last-child)": {
         borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
      },

      "& .MuiListItemIcon-root": {
         minWidth: "36px",
      },

      "& .MuiListItemText-root": {
         textTransform: "capitalize",
      },
   },
   coinDescription: {
      "& p": {
         marginBottom: "24px",
         color: theme.palette.info.main,
         lineHeight: "1.4",
         fontWeight: "500",
      },

      "& a": {
         textDecoration: "underline",
      },

      "& h3": {
         fontSize: "22px",
         fontWeight: "400",
         marginBottom: "12px",
      },
   },
}));

export default useStyles;
