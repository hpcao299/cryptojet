import { ThemeProvider } from "@mui/material";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Footer, Loader, Navbar } from "./components";
import customTheme from "./customTheme";
import ScrollToTop from "./hooks/ScrollToTop";
import routes from "./pages/routes";

function App() {
   const router = useRoutes(routes);

   console.log(process.env.REACT_APP_API_KEY);

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
