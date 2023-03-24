import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color=''>
        <Toolbar>

          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} style={{textAlign: 'left'}}>
            Our Store
          </Typography>
          <Button color="inherit">Cart (INOP)</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}