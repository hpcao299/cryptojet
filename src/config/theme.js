import { lightBlue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
   primary: {
      main: lightBlue,
      dark: lightBlue[600],
      light: lightBlue[300],
      contrastText: "#fff",
   },
});

export default theme;
