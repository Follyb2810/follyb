'use client'
import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, Button, Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import * as IMG from './../Asset/images/images'
import AnchorButton from './AnchorButton';
import { data } from '../common/data';
import Link from 'next/link';
import ButtonComponent from './ButtonComponent';

const drawerWidth = 240;
function NavBar(props) {

  const {navItem} = data[1]

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',display:'flex',flexDirection:'column',gap:3,mt:2 }}>
        {navItem.map((item,index) => (
          item.path === '/nft' ? 
          <ButtonComponent
                url={item.path}
                label={item.name}
                key={index}

                style={{color:'white'}}
        /> :
        <AnchorButton
      label={item.name}
      url={item.path}
       key={index}
      styles={{ color:'white'}}  
       />
        ))}
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  
  return (
    <AppBar position="fixed">
    <Container maxWidth="xl" >
    <Toolbar disableGutters sx={{display:"flex",justifyContent:'space-between',alignItems:'center'}}>
    <Link href='/'>
    <Image src={IMG.Logo} alt='folly'  width={50} height={50} />
    </Link>
          <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      
      
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      
      <Box sx={{ display: { xs: 'none', sm: 'flex' },gap:3,px:2 }}>
            {navItem.map((item,index) => (
                
                  item.path === '/nft' ? <ButtonComponent
                    url={item.path}
                    label={item.name}
                    key={index}
                    variant='secondary'
                  /> :
                  <AnchorButton
                label={item.name}
                url={item.path}
                 key={index}
                styles={{ color:'white'}}  
                
                 />
                
            ))}
          </Box>
        </Toolbar>
        </Container>
        </AppBar>
  );
}
export default NavBar;