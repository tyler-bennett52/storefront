import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import { removeItem, incrementProduct } from '../../store/actions';
import { removeFromCart as removeItem } from '../../store/cart';
import { incrementStock as incrementProduct } from '../../store/products';
import { Card, CardContent, Typography } from '@mui/material';

function SimpleCart() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function removeFromCart(product) {
    dispatch(removeItem(product));
    dispatch(incrementProduct(product));
  }

  return (
    <Card
      sx={{
        width: '10%',
        border: '1px solid gray',
        position: 'absolute',
        right: '0',
        backgroundColor: 'gray',
      }}
    >
      {cart.map((product, index) => (
        <CardContent
          key={`cartItem-${index}`}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: index !== 0 ? '1px solid white' : 'none',
            borderBottom: index !== cart.length - 1 ? '1px solid white' : 'none',
            padding: 1,
          }}
        >
          <Typography variant="body1" color="white">{product.name} - ${product.price}</Typography>
          <IconButton
            color="error"
            aria-label="remove from cart"
            component="span"
            onClick={() => removeFromCart(product)}
          >
            <CloseIcon />
          </IconButton>
        </CardContent>
      ))}
    </Card>
  );
}

export default SimpleCart;
