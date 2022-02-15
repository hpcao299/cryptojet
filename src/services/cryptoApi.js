import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
   "x-rapidapi-host": "coinranking1.p.rapidapi.com",
   "x-rapidapi-key": "6b0a646d31mshf82f968fd2c6c3bp1d5c7ejsna01dcea337f1",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = url => ({ url, headers: cryptoApiHeader });

export const cryptoApi = createApi({
   reducerPath: "cryptoApi",
   baseQuery: fetchBaseQuery({
      baseUrl,
   }),
   endpoints: builder => ({
      getCryptos: builder.query({
         query: count => createRequest(`/coins?limit=${count}`),
      }),
   }),
});

export const { useGetCryptosQuery } = cryptoApi;
