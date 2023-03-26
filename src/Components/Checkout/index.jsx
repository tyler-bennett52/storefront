import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function Checkout() {
  const { cart } = useSelector((state) => state.cart);

  const totalPrice = cart.reduce((acc, val) => acc += val.price, 0); 

  return (
    <Container maxWidth="sm">
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>
      <Typography variant="h6" gutterBottom>
        Total Price: ${totalPrice.toFixed(2)}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            id="fullName"
            name="fullName"
            label="Full Name"
            fullWidth
            autoComplete="given-name"
            sx={{ backgroundColor: 'rgba(211, 211, 211, 0.3)', borderRadius: 1 }}
            InputProps={{ style: { color: 'black' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            sx={{ backgroundColor: 'rgba(211, 211, 211, 0.3)', borderRadius: 1 }}
            InputProps={{ style: { color: 'black' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            sx={{ backgroundColor: 'rgba(211, 211, 211, 0.3)', borderRadius: 1 }}
            InputProps={{ style: { color: 'black' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            sx={{ backgroundColor: 'rgba(211, 211, 211, 0.3)', borderRadius: 1 }}
            InputProps={{ style: { color: 'black' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            sx={{ backgroundColor: 'rgba(211, 211, 211, 0.3)', borderRadius: 1 }}
            InputProps={{ style: { color: 'black' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            sx={{ backgroundColor: 'rgba(211, 211, 211, 0.3)', borderRadius: 1 }}
            InputProps={{ style: { color: 'black' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            sx={{ backgroundColor: 'rgba(211, 211, 211, 0.3)', borderRadius: 1 }}
            InputProps={{ style: { color: 'black' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary" fullWidth>
            Submit
          </Button>
        </Grid>
     
  
        </Grid>
      </Box>
    </Container>
  );
}

export default Checkout;
