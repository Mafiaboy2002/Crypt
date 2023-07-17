import { BehanceSquareOutlined } from '@ant-design/icons';
import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';
  const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'f3ea694aa3mshef5cdf1c81c6208p18692djsn8107cc9fa286',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    
  }
  const baseUrl = `https://coinranking1.p.rapidapi.com/`;

  const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

// Crypto API Redux Logic
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // get cryptocurrencies
    getCryptos: builder.query({
      query: () => createRequest('/coins'),
    }),
    }),
  });

  export const { useGetCryptosQuery } = cryptoApi;
