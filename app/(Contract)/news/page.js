'use client'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { useGetNewsQuery } from '../../../services/cryptoNewsApi';
import Image from 'next/image';
import moment from 'moment';
import PageLoader from '@/app/loading'

const NewsPage = ({ simplified }) => {
    const limit = simplified ? 10 : 50; // Adjust the limit based on your condition
    const { data: cryptoNews, isFetching } = useGetNewsQuery(limit);

  if (!cryptoNews?.data) return <PageLoader/>;

  return (
    <Box sx={{marginTop: '80px',mb:'40px'}}>
      <Grid container spacing={2}>
        {cryptoNews.data.map((news, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <a href={news.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <CardContent>
                  <Typography variant="body1" sx={{ marginBottom: 1 }} color='primary'>
                    {news.title}
                  </Typography>
                  
                  <Image src={news.thumbnail} alt="" width={300} height={200} />
                  <Typography variant="body2" color='primary' sx={{ marginTop: 1, marginBottom: 1 }}>
                    {news.description}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {moment(news.createdAt).startOf('ss').fromNow()}
                  </Typography>
                </CardContent>
              </a>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsPage;



// useEffect(()=>{
//     const options = {
//         method: 'GET',
//         url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk',
//         headers: {
//           'X-RapidAPI-Key': '0da537d340mshc80cdfd3774d48ep1fb564jsnbf1c0de925d6',
//           'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
//         }
//       };
      
//     const folly =async ()=>{
//         const config={
//             headers: {
//                 'X-RapidAPI-Key': '0da537d340mshc80cdfd3774d48ep1fb564jsnbf1c0de925d6',
//                 'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
//               } 
//         }
//         try {
//             const response = await axios.get('https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk',config)
//             console.log(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     }
//     // folly()
// })
