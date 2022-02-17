import {
   Avatar,
   Card,
   CardActionArea,
   CardContent,
   CardHeader,
   Grid,
   Typography,
} from "@mui/material";
import millify from "millify";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import SearchInput from "./SearchInput";
import useStyles from "./styles";

function Cryptocurrencies({ simplified }) {
   const count = simplified ? 12 : 100;
   const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
   const [cryptos, setCryptos] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
   const classes = useStyles();

   useEffect(() => {
      const filteredData = cryptosList?.data?.coins.filter(coin =>
         coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCryptos(filteredData);
   }, [cryptosList, searchTerm]);

   if (isFetching) return <div>Loading...</div>;

   return (
      <>
         {!simplified && <SearchInput values={{ searchTerm, setSearchTerm }} />}
         <Grid container spacing={3} sx={{ mb: 5 }}>
            {cryptos?.map(coin => (
               <Grid item lg={3} xs={12} sm={6} md={4} key={coin.uuid}>
                  <Card>
                     <CardActionArea>
                        <Link to={`/crypto/${coin.uuid}`}>
                           <CardHeader
                              className={classes.cardHeader}
                              title={coin.name}
                              avatar={<Avatar src={coin.iconUrl} alt={coin.name} />}
                           />
                           <CardContent>
                              <Typography sx={{ color: "rgba(0, 0, 0, 0.7)" }} gutterBottom>
                                 Price: {millify(coin.price)} USD
                              </Typography>
                              <Typography sx={{ color: "rgba(0, 0, 0, 0.7)" }} gutterBottom>
                                 Market Cap: {millify(coin.marketCap)}
                              </Typography>
                              <Typography sx={{ color: "rgba(0, 0, 0, 0.7)" }}>
                                 Daily Change: {millify(coin.change)}%
                              </Typography>
                           </CardContent>
                        </Link>
                     </CardActionArea>
                  </Card>
               </Grid>
            ))}
         </Grid>
      </>
   );
}

export default Cryptocurrencies;
