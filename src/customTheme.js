import { lightBlue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
   primary: {
      main: lightBlue,
      dark: lightBlue[600],
      light: lightBlue[300],
      contrastText: "#fff",
   },
});

export default customTheme;
