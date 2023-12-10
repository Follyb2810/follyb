'use client'
import React from 'react'
import millify from 'millify'
import { Box, Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { useGetCryptosQuery, useGetExchangeQuery } from './../../../services/cryptoApi'
import CryptocurrenciesPage from '../crypto/page'
import NewsPage from '../news/page'
import PageLoader from '@/app/loading'

const Page = () => {
    const {data,isFetching} = useGetCryptosQuery(10)
    const globalStats = data?.data?.stats
    if(isFetching) return  <PageLoader/>
    return (
      <section style={{ marginTop: '70px', padding: '20px' }}>
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>
          Global Crypto Stats
        </Typography>
  
        <Grid container spacing={3} justifyContent={'space-between'}>
          <Grid item xs={6} sm={4} md={2}>
            <Box className="crypto-stat" sx={{textAlign:'center'}}>
              <Typography variant="subtitle2">Total Cryptocurrencies</Typography>
              <Typography>{millify(globalStats?.total)}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box className="crypto-stat" sx={{textAlign:'center'}}>
              <Typography variant="subtitle2">Total Exchanges</Typography>
              <Typography>{millify(globalStats?.totalExchanges)}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box className="crypto-stat" sx={{textAlign:'center'}}>
              <Typography variant="subtitle2">Total MarketCap</Typography>
              <Typography>{millify(globalStats?.totalMarketCap)}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box className="crypto-stat" sx={{textAlign:'center'}}>
              <Typography variant="subtitle2">Total 24h Volume</Typography>
              <Typography>{millify(globalStats?.total24hVolume)}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box className="crypto-stat" sx={{textAlign:'center'}}>
              <Typography variant="subtitle2">Total Markets</Typography>
              <Typography>{millify(globalStats?.totalMarkets)}</Typography>
            </Box>
          </Grid>
        </Grid>
  
        <Box className="home-heading-container" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <Typography variant="h4">Top 10 cryptocurrencies in the world</Typography>
          <Link href="/crypto">
            <Button variant="contained" color="primary">
              See More
            </Button>
          </Link>
        </Box>
        <CryptocurrenciesPage simplified />
  
      
      </section>
    );
}

export default Page
