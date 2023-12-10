import * as React from 'react';
import * as IMG from './../Asset/images/images';
import { AppBar, Container, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from '@mui/icons-material';

export default function Web3NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [screenSize, setScreenSize] = React.useState(null);

  React.useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [screenSize]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const closeDrawer = () => {
    setMobileOpen(false);
  };

  const renderDesktopMenu = () => (
    <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-between', alignItems: 'center' }}>
      <Link href="/swap">
        <Button color="secondary">Swap</Button>
      </Link>
      <Link href="/crypto">
        <Button color="secondary">Cryptocurrencies</Button>
      </Link>
      <Link href="/news">
        <Button color="secondary">News</Button>
      </Link>
    </Box>
  );

  const renderMobileMenu = () => (
    <Drawer anchor="right" open={mobileOpen} onClose={closeDrawer} >
      <List onClick={closeDrawer} sx={{backgroundColor:'blue'}}>
        <ListItem>
          <Link href="/">
            <Button color="secondary">Home</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/exchanges">
            <Button color="secondary">Exchanges</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/crypto">
            <Button color="secondary">Cryptocurrencies</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/news">
            <Button color="secondary">News</Button>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/follyhome">
            
              <Image src={IMG.Logo} alt="folly" width={50} height={50} />
            
          </Link>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <Menu sx={{ color: 'white' }} />
          </IconButton>
          {renderDesktopMenu()}
          {renderMobileMenu()}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
