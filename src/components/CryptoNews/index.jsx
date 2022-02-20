import { Avatar, Box, Card, CardActionArea, Grid, Typography } from "@mui/material";
import moment from "moment";
import { useState } from "react";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import Loader from "../Loader";
import SelectCategory from "./SelectCategory";

const demoImage = "https://i1.sndcdn.com/artworks-000308862003-0uqeas-t240x240.jpg";

function CryptoNews({ simplified }) {
   const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
   const count = simplified ? 6 : 100;
   const { data: cryptoNews } = useGetCryptoNewsQuery({
      newsCategory,
      count,
   });

   if (!cryptoNews?.value) return <Loader />;

   return (
      <>
         {!simplified && <SelectCategory setNewsCategory={setNewsCategory} />}
         <Grid container spacing={3} sx={{ mb: 5 }}>
            {cryptoNews.value.map((cryptoNew, index) => (
               <Grid item lg={4} xs={12} md={6} key={index}>
                  <Card>
                     <CardActionArea sx={{ p: 2 }}>
                        <a href={cryptoNew.url} target="_blank" rel="noreferrer">
                           <Box sx={{ display: "flex", pb: 2 }}>
                              <Typography sx={{ flex: "1", mr: 1, fontSize: 18 }}>
                                 {cryptoNew.name}
                              </Typography>
                              <img
                                 src={cryptoNew?.image?.thumbnail?.contentUrl || demoImage}
                                 alt="News"
                                 width="40%"
                              />
                           </Box>
                           <Typography paragraph>
                              {cryptoNew.description > 50
                                 ? `${cryptoNew.description.substring(0, 50)}...`
                                 : cryptoNew.description}
                           </Typography>
                           <Box
                              sx={{
                                 display: "flex",
                                 alignItems: "center",
                                 justifyContent: "space-between",
                              }}
                           >
                              <Box sx={{ display: "flex", alignItems: "center" }}>
                                 <Avatar
                                    src={cryptoNew?.provider[0]?.image?.thumbnail?.contentUrl}
                                    alt={cryptoNew?.provider[0]?.name}
                                    sx={{ width: 30, height: 30, mr: 1 }}
                                 />
                                 <Typography variant="body2">
                                    {cryptoNew?.provider[0]?.name}
                                 </Typography>
                              </Box>
                              <Typography variant="body2">
                                 {moment(cryptoNew.datePublished).startOf("ss").fromNow()}
                              </Typography>
                           </Box>
                        </a>
                     </CardActionArea>
                  </Card>
               </Grid>
            ))}
         </Grid>
      </>
   );
}

export default CryptoNews;
