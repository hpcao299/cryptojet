import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import NumbersOutlinedIcon from "@mui/icons-material/NumbersOutlined";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import useStyles from "./styles";

function Info({ coinDetails }) {
   const classes = useStyles();

   const stats = [
      {
         title: "Price to USD",
         value: `$${
            coinDetails?.price &&
            millify(coinDetails.price, {
               precision: 3,
            })
         }`,
         icon: <MonetizationOnOutlinedIcon />,
      },
      { title: "Rank", value: coinDetails?.rank, icon: <NumbersOutlinedIcon /> },
      {
         title: "24h Volume",
         value: `$${coinDetails && millify(coinDetails["24hVolume"])}`,
         icon: <OfflineBoltOutlinedIcon />,
      },
      {
         title: "Market Cap",
         value: `$${coinDetails?.marketCap && millify(coinDetails?.marketCap)}`,
         icon: <MonetizationOnOutlinedIcon />,
      },
      {
         title: "All-time-high (daily avg.)",
         value: `$${coinDetails?.allTimeHigh?.price && millify(coinDetails?.allTimeHigh?.price)}`,
         icon: <EmojiEventsOutlinedIcon />,
      },
   ];

   const genericStats = [
      {
         title: "Number Of Markets",
         value: coinDetails?.numberOfMarkets,
         icon: <InsertChartOutlinedIcon />,
      },
      {
         title: "Number Of Exchanges",
         value: coinDetails?.numberOfExchanges,
         icon: <CurrencyExchangeOutlinedIcon />,
      },
      {
         title: "Aprroved Supply",
         value: coinDetails?.supply?.confirmed ? <CheckOutlinedIcon /> : <CloseOutlinedIcon />,
         icon: <ReportGmailerrorredOutlinedIcon />,
      },
      {
         title: "Total Supply",
         value: `$${coinDetails?.supply?.total && millify(coinDetails?.supply?.total)}`,
         icon: <ReportGmailerrorredOutlinedIcon />,
      },
      {
         title: "Circulating Supply",
         value: `$${coinDetails?.supply?.circulating && millify(coinDetails?.supply?.circulating)}`,
         icon: <ReportGmailerrorredOutlinedIcon />,
      },
   ];

   return (
      <Grid container sx={{ mt: 5 }} columnSpacing={6}>
         <Grid item lg={6} xs={12} sx={{ mb: 7 }}>
            <Box className={classes.statistics}>
               <Typography variant="h5" gutterBottom>
                  {coinDetails.name} Value Statistics
               </Typography>
               <Typography paragraph sx={{ mb: 2 }}>
                  An overview showing the stats of {coinDetails.name}
               </Typography>
               <List className={classes.statisticsList}>
                  {stats.map((stat, index) => (
                     <ListItem key={index}>
                        <ListItemIcon>{stat.icon}</ListItemIcon>
                        <ListItemText>{stat.title}</ListItemText>
                        <Typography sx={{ fontWeight: 600 }}>{stat.value}</Typography>
                     </ListItem>
                  ))}
               </List>
            </Box>
         </Grid>
         <Grid item lg={6} xs={12} sx={{ mb: 7 }}>
            <Box className={classes.statistics}>
               <Typography variant="h5" gutterBottom>
                  Other Statistics
               </Typography>
               <Typography paragraph sx={{ mb: 2 }}>
                  An overview showing the stats of all cryptocurrencies
               </Typography>
               <List className={classes.statisticsList}>
                  {genericStats.map((stat, index) => (
                     <ListItem key={index}>
                        <ListItemIcon>{stat.icon}</ListItemIcon>
                        <ListItemText>{stat.title}</ListItemText>
                        <Typography sx={{ fontWeight: 600 }}>{stat.value}</Typography>
                     </ListItem>
                  ))}
               </List>
            </Box>
         </Grid>
         <Grid item lg={6} xs={12}>
            <Box className={classes.coinDescription}>
               <h3>What is {coinDetails?.name}?</h3>
               {HTMLReactParser(coinDetails.description)}
            </Box>
         </Grid>
         <Grid item lg={6} xs={12}>
            <Typography variant="h5">{coinDetails.name} Links</Typography>
            <List className={classes.statisticsList}>
               {coinDetails?.links.map((link, index) => (
                  <ListItem key={index}>
                     <ListItemText>{link.type}</ListItemText>
                     <Typography
                        component="a"
                        target="_blank"
                        rel="noreferrer"
                        href={link.url}
                        className="primary-link"
                        sx={{ fontWeight: 600 }}
                     >
                        {link.name}
                     </Typography>
                  </ListItem>
               ))}
            </List>
         </Grid>
      </Grid>
   );
}

export default Info;
