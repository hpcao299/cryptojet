import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeader = {
   "x-bingapis-sdk": "true",
   "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
   "x-rapidapi-key": process.env.REACT_APP_API_KEY,
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = url => ({ url, headers: cryptoNewsHeader });

export const cryptoNewsApi = createApi({
   reducerPath: "cryptoNewsApi",
   baseQuery: fetchBaseQuery({
      baseUrl,
   }),
   endpoints: builder => ({
      getCryptoNews: builder.query({
         query: ({ newsCategory, count }) =>
            createRequest(
               `/news/search?textFormat=Raw&safeSearch=Off&q=${newsCategory}&count=${count}&freshness=Day`
            ),
      }),
   }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
