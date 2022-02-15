import { Typography } from "@mui/material";

function Statistic(props) {
   const { title, value } = props;

   return (
      <>
         <Typography variant="body2" color="text.secondary">
            {title}
         </Typography>
         <Typography variant="h5" gutterBottom>
            {value}
         </Typography>
      </>
   );
}

export default Statistic;
