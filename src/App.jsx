import { ThemeProvider } from "@mui/material";
import { Navbar } from "./components";
import theme from "./config/theme";

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Navbar />
      </ThemeProvider>
   );
}

export default App;
