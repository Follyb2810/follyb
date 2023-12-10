'use client'
import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Box, Card, CardContent, Grid, Input, Typography } from '@mui/material'
import { useGetCryptosQuery } from '@/services/cryptoApi'
import Link from 'next/link'
import Image from 'next/image'
import PageLoader from '@/app/loading'
const CryptocurrenciesPage = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!cryptoList) return <PageLoader/>;

    const filteredData = cryptoList?.data?.coins?.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData)
  }, [cryptoList, searchTerm]);
  if (isFetching) return  <PageLoader/>
  return (
    <>
    {
      !simplified && (
        <Box sx={{ marginTop: '80px',mb:'40px',textAlign:'center' }}>
          <Input
            placeholder="Search cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>

      )
    }
      <Grid container spacing={3}>
        {cryptos?.map((currency) => (
          <Grid item key={currency?.uuid} xs={12} sm={6} md={4} lg={3}>
            <Link href={`/crypto/${currency?.uuid}`}>
            
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography>{`${currency?.rank}. ${currency?.name}`}</Typography>
                    <Image src={currency?.iconUrl} alt="" width={50} height={50} />
                  </Box>
                  <Typography component="p">Price: {millify(currency?.price)}</Typography>
                  <Typography component="p">Market Cap: {millify(currency?.marketCap)}</Typography>
                  <Typography component="p">Daily Change: {millify(currency?.change)}%</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
  
}

export default CryptocurrenciesPage