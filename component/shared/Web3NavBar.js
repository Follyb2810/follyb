'use client'
import * as React from 'react';
import * as IMG from './../Asset/images/images'
import { AppBar, Container, Toolbar, Typography ,Button, Box, IconButton} from '@mui/material';
import Image from 'next/image';
import ButtonComponent from './ButtonComponent';
import { Menu } from '@mui/icons-material';
import Link from 'next/link';

export default function Web3NavBar() {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    
    <AppBar position="fixed">
    <Container maxWidth='xl'>
    <Toolbar disableGutters sx={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>
    <Link href='/'>
    <Image src={IMG.Logo} alt='folly'  width={50} height={50} />
    </Link>    
        <IconButton
        color="secondary"
        aria-label="open drawer"
        // edge="end"
         sx={{ mr: 2, display: { xs: 'block',sm:'none' } }}
       >
         <Menu sx={{color:"wite"}}/>
       </IconButton>
         <Box sx={{display:{xs:'none',sm:'flex'},justifyContent:'space-between',alignItems:'center'}}>
         <ButtonComponent label='WhiteList' color='secondary' url='/whitelist'/>
         <ButtonComponent label='Connect Wallet' color='secondary'/>
         </Box>
        </Toolbar>
        </Container>
      </AppBar>
  );
}