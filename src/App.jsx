import { ThemeProvider } from "@mui/material";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Footer, Loader, Navbar } from "./components";
import customTheme from "./customTheme";
import routes from "./pages/routes";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
   const router = useRoutes(routes);

   return (
      <ThemeProvider theme={customTheme}>
         <Navbar />
         <ScrollToTop />
         <div className="main">
            <Suspense fallback={<Loader />}>
               <div className="content">{router}</div>
            </Suspense>
            <Footer />
         </div>
      </ThemeProvider>
   );
}

export default App;
