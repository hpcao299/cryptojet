import { ThemeProvider } from "@mui/material";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import customTheme from "./customTheme";
import routes from "./pages/routes";

function App() {
   const router = useRoutes(routes);

   return (
      <ThemeProvider theme={customTheme}>
         <Navbar />
         <div className="main">
            <Suspense fallback={<div>Loading...</div>}>
               <div className="content">{router}</div>
            </Suspense>
            <Footer />
         </div>
      </ThemeProvider>
   );
}

export default App;
