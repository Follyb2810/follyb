'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const options = {
    method: 'GET',
    url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk',
    headers: {
      'X-RapidAPI-Key': '0da537d340mshc80cdfd3774d48ep1fb564jsnbf1c0de925d6',
      'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
    }
  };


  // const cryptoNewsHeader ={
  //   'X-RapidAPI-Key': '0da537d340mshc80cdfd3774d48ep1fb564jsnbf1c0de925d6',
  //     'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
  // }
  // const baseUrl='https://cryptocurrency-news2.p.rapidapi.com/v1/';
  // const createRequest =(url)=>({url,headers:cryptoNewsHeader})


  // export const cryptoNewsApi = createApi({
  //   reducerPath: 'cryptoNewsApi',
  //   baseQuery: fetchBaseQuery({ baseUrl }),
  //   endpoints: (builder) => ({
  //     getCryptosNews: builder.query({
  //       query: () => createRequest(`coindesk`)
  //     }),
  //   })
  // });


  // export const {useGetCryptoNewsQuery} = cryptoNewsApi

  // 'use client'
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// ! to be use with error
// import {
//   createApi,
//   fetchBaseQuery,
//   FetchBaseQueryError,
// } from '@reduxjs/toolkit/query'
// import { Post, User } from './types'

// const api = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: '/ ' }),
//   endpoints: (build) => ({
//     getRandomUserPosts: build.query<Post, void>({
//       async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
//         // get a random user
//         const randomResult = await fetchWithBQ('users/random')
//         if (randomResult.error) throw randomResult.error
//         const user = randomResult.data as User
//         const result = await fetchWithBQ(`user/${user.id}/posts`)
//         return result.data
//           ? { data: result.data as Post }
//           : { error: result.error as FetchBaseQueryError }
//       },
//     }),
//   }),
// })
const cryptoapiHeaders = {
  'X-RapidAPI-Key': '0da537d340mshc80cdfd3774d48ep1fb564jsnbf1c0de925d6',
  'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}
const baseUrl ='https://cryptocurrency-news2.p.rapidapi.com/v1/';

const createRequest = (url) => ({ url, headers: cryptoapiHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({  // Here, it was getCryptos, but it should be getNews
      query: (count) => createRequest(`coindesk? limit=${count}`)
    }),
  })
  // https://www.coindesk.com/policy/2023/12/08/crypto-provisions-dropped-from-2023-us-defense-bill/?utm_medium=referral&utm_source=rss&utm_campaign=headlines
});

export const { useGetNewsQuery } = cryptoNewsApi;  //Needs to match what is declared in endpoints