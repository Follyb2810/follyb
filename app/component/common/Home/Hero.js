import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { data } from '../data';
import Image from 'next/image';
import ButtonComponent from '../../shared/ButtonComponent';
import AnchorButton from '../../shared/AnchorButton';

const Hero = () => {
  const { HeroData } = data[0];
  const {footData} = data[2]

  return (
    <Grid container spacing={1} justifyContent="space-between" alignItems="center" >
    <Grid item xs={12} sm={4} style={{display:'flex',justifyContent:'center'}}>
    <Image
      src={HeroData.hero}
      alt=""
      width={'100%'}
      height={400}
    />
  </Grid>
      <Grid item xs={12} sm={8} sx={{marginTop:{sm:'200px',md:'0px'}}}>
        <Typography>{HeroData.content}</Typography>
        <Box sx={{mt:2}}>
        {footData.map((data, index) => (
            <AnchorButton url={data.path}
             label={data.icon} key={index} 
             target={data.path.startsWith('http')?'_blank':''} 
             rel='noreferrer'/>
          ))}
        </Box>
      </Grid>
      
    </Grid>
  );
};

export default Hero;



// width={0}
                        // height={0}
                        // sizes="100vw"
                        // style={{ width: '100%', height: 'auto' }} 
                        // layout='fill'