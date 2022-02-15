import { lightBlue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
   primary: {
      main: lightBlue,
      dark: lightBlue[600],
      light: lightBlue[300],
      contrastText: "#fff",
   },
   secondary: {
      contrastText: "rgba(0, 0, 0, 0.6)",
   },
   palette: {
      text: {
         secondary: "#8A898C",
      },
   },
});

export default customTheme;
