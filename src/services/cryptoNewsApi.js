import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeader = {
   "x-bingapis-sdk": "true",
   "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
   "x-rapidapi-key": "6b0a646d31mshf82f968fd2c6c3bp1d5c7ejsna01dcea337f1",
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
