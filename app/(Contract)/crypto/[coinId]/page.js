'use client'
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '@/services/cryptoApi';
import { Box, Card, CardContent, Grid, MenuItem, Select, Typography, Paper, Button } from '@mui/material';
import millify from 'millify';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { AccountBalanceWallet } from '@mui/icons-material';
import HTMLReactParser from 'html-react-parser';
import LineChart from '@/component/shared/LineChart';
import { useParams } from 'next/navigation'
import PageLoader from '@/app/loading'


const Page = ({params}) => {
  // const params = useParams()
  const [timePeriod, setTimePeriod] = useState('7d');
  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
  // 1h, 3h, 12h, 24h, 7d, 30d, 3m, 1y, 3y, 5y
  const coinId = params.coinId

  const { data, isFetching } = useGetCryptoDetailsQuery(params.coinId);
  const {data:coinHistory,isFetching:detailsApi}=useGetCryptoHistoryQuery({timePeriod,coinId})
  const cryptoDetails = data?.data?.coin;
  if(detailsApi) return <PageLoader/>
  
  

  const stats = [
    { title: 'Price to USD', value: cryptoDetails?.price && millify(cryptoDetails?.price), icon: <AccountBalanceWallet /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <AccountBalanceWallet /> },
    { title: '24h Volume', value: cryptoDetails && millify(cryptoDetails['24hVolume']), icon: <AccountBalanceWallet /> },
    { title: 'Market Cap', value: cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap), icon: <AccountBalanceWallet /> },
    {
      title: 'All-time-high (daily avg)',
      value: cryptoDetails?.allTimeHigh && millify(cryptoDetails?.allTimeHigh?.price),
      icon: <AccountBalanceWallet />,
    },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <AccountBalanceWallet /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <AccountBalanceWallet /> },
    { title: 'Approved Supply', value: cryptoDetails?.supply?.supplyAt && millify(cryptoDetails?.supply?.supplyAt), icon: <AccountBalanceWallet /> },
    { title: 'Total Supply', value: cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total), icon: <AccountBalanceWallet /> },
    { title: 'Circulating Supply', value: cryptoDetails?.supply?.circulating, icon: <AccountBalanceWallet /> },
  ];

  return (
    <Box mt={8} p={2}>
      <Typography variant="h4">{`${cryptoDetails?.name} (${cryptoDetails?.symbol})`}</Typography>
      <Typography>{`${cryptoDetails?.name} live price in US Dollars. View statistics, market cap, and more.`}</Typography>
      <Select value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} sx={{ mt: 2 }}>
        {time.map((date, index) => (
          <MenuItem key={index} value={date}>
            {date}
          </MenuItem>
        ))}
      </Select>

      <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name}/>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Stats</Typography>
            {stats.map((stat, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography>{stat.icon}</Typography>
                <Typography>{`${stat.title}: ${stat.value}`}</Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
              
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Generic Stats</Typography>
            {genericStats.map((stat, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography>{stat.icon}</Typography>
                <Typography>{`${stat.title}: ${stat.value}`}</Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
      
      <Box mt={4}>
        <Typography variant="h6">What is {cryptoDetails?.name}</Typography>
        <Typography>{cryptoDetails?.description && HTMLReactParser(cryptoDetails?.description)}</Typography>
      </Box>

      <Box mt={4} sx={{ backgroundColor: '#333333', p: 2, borderRadius: 4 }}>
        <Typography variant="h6" color='secondary'>
          {cryptoDetails?.name} Links
        </Typography>
        {cryptoDetails?.links.map((link) => (
          <Box key={link.name} sx={{ display: { sm: 'column', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
            <Typography color='secondary'>{link.type}</Typography>
            <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', display: 'block', wordBreak: 'break-all' }}>
              {link.url}
            </a>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Page;




  // const fetchData = async () => {
  //   const referenceCurrencyUuid = 'yhjMzLPhuIDl';
  //   const timePeriod = '24h';
  
  //   try {
  //     const response = await fetch(`https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=${referenceCurrencyUuid}&timePeriod=${timePeriod}`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'X-RapidAPI-Key': '0da537d340mshc80cdfd3774d48ep1fb564jsnbf1c0de925d6', // Replace with your actual RapidAPI key
  //       },
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
