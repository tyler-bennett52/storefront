import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NavBar() {
  const { cart } = useSelector(state => state.cart)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='' style={{ backgroundColor: 'inherit' }}>
        <Toolbar>

          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} style={{ textAlign: 'left' }}>
            <Link to='/'>Our Store</Link>
          </Typography>
          <Button color="inherit"> <Link to="checkout">Cart</Link> ({cart.length})</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}