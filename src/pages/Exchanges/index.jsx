import { Alert } from "@mui/material";
import useStyles from "./styles";

function ExchangesPage() {
   const classes = useStyles();

   return (
      <Alert variant="filled" severity="info" sx={{ fontSize: 18 }} className={classes.alert}>
         We haven't supported exchanges.
      </Alert>
   );
}

export default ExchangesPage;
