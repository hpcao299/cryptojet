import { Box, Typography } from "@mui/material";

function NotFound() {
   return (
      <Box className="not-found">
         <Typography variant="h1" align="center">
            404
         </Typography>
         <Typography variant="h4" align="center">
            Not Found
         </Typography>
      </Box>
   );
}

export default NotFound;
