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

function Cryptocurrencies({ simplified, searching }) {
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

   console.log(cryptos);
   return (
      <>
         {searching && <SearchInput values={{ searchTerm, setSearchTerm }} />}
         <Grid container spacing={3}>
            {cryptos?.map(crypto => (
               <Grid item lg={3} xs={12} sm={6} key={crypto.uuid}>
                  <Card>
                     <CardActionArea>
                        <Link to={`/crypto/${crypto.uuid}`}>
                           <CardHeader
                              className={classes.cardHeader}
                              title={crypto.name}
                              avatar={<Avatar src={crypto.iconUrl} alt={crypto.name} />}
                           />
                           <CardContent>
                              <Typography sx={{ color: "rgba(0, 0, 0, 0.7)" }} gutterBottom>
                                 Price: {millify(crypto.price)}
                              </Typography>
                              <Typography sx={{ color: "rgba(0, 0, 0, 0.7)" }} gutterBottom>
                                 Market Cap: {millify(crypto.marketCap)}
                              </Typography>
                              <Typography sx={{ color: "rgba(0, 0, 0, 0.7)" }}>
                                 Daily Change: {millify(crypto.change)}%
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
