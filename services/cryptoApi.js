'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoapiHeaders = {
  'X-RapidAPI-Key': '0da537d340mshc80cdfd3774d48ep1fb564jsnbf1c0de925d6',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
}

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    limit: '50',
    offset: '0',
    orderBy: '24hVolume',
    orderDirection: 'desc'
  },
  headers: {
    'X-RapidAPI-Key': '0da537d340mshc80cdfd3774d48ep1fb564jsnbf1c0de925d6',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

// /Qwsogvtv82FCd/history?referenceCurrencyUuid=${referenceCurrencyUuid}&timePeriod=${timePeriod}

const baseUrl = 'https://coinranking1.p.rapidapi.com/'
const referenceCurrencyUuid = 'yhjMzLPhuIDl'

const createRequest = (url) => ({ url, headers: cryptoapiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),
    getCryptoDetails:builder.query({
      query:(coinid)=>createRequest(`/coin/${coinid}`)
    }),
    getCryptoHistory:builder.query({
      query:({timePeriod,coinId})=>createRequest(`/coin/${coinId}/history?referenceCurrencyUuid=${referenceCurrencyUuid}&timePeriod=${timePeriod}`)
    }),
    getExchange:builder.query({
      query:()=>createRequest(`/exchanges?referenceCurrencyUuid=${referenceCurrencyUuid}&limit=50&offset=0&orderBy=24hVolume&orderDirection=desc`)
    }),
    
  })
});
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
 useGetExchangeQuery
 } = cryptoApi;


//  export default cryptoApi
// export const {useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetExchangesQuery } = cryptoApi

// coinranking1
// ttps://coinranking1.p.rapidapi.com/coin/undefined/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=7d 404 (Not Found)
// url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history',
// ttps:/         /coinranking1.p.rapidapi.com/coin/undefined/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=7d 404 (Not Found)
// https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=${referenceCurrencyUuid}&timePeriod=${timePeriod}
// Qwsogvtv82FCd/history?referenceCurrencyUuid=${referenceCurrencyUuid}&timePeriod=${timePeriod}
// export const { useGetPokemonByNameQuery } = pokemonApi