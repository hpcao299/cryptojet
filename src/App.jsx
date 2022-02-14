import { ThemeProvider } from "@mui/material";
import { Navbar } from "./components";
import customTheme from "./customTheme";

function App() {
   return (
      <ThemeProvider theme={customTheme}>
         <Navbar />
      </ThemeProvider>
   );
}

export default App;
