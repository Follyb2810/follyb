'use client'
import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, Button, Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import {data} from '../common/data';
import * as IMG from './../Asset/images/images'
import AnchorButton from './AnchorButton';

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
          <AnchorButton
                label={item.name}
                url={item.path}
                 key={index}
                styles={{ color:'blue'}}   />
        ))}
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  
  return (
    <Container maxWidth="xl" >
    <AppBar position="static">
        <Toolbar disableGutters sx={{display:"flex",justifyContent:'space-between'}}>
          <Image src={IMG.Logo} alt='folly'  width={50} height={50} />
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
              <AnchorButton
                label={item.name}
                url={item.path}
                 key={index}
                styles={{ color:'white'}}   />
            ))}
          </Box>
        </Toolbar>
        </AppBar>
      </Container>
  );
}
export default NavBar;