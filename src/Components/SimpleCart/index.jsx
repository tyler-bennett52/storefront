// SimpleCart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { removeItem } from '../../store/cart';

function SimpleCart() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch()


  return (
    <ul style={{listStyleType: 'none', width: '10%', border: '1px black solid', position: 'absolute', right: '0'}}>
      {cart.map((product, index) => (
        <li key={`cartItem-${index}`}>
          
          {product.name}
          <IconButton color="error" aria-label="remove from cart" component="span" onClick={() => dispatch(removeItem(product))}>
            <CloseIcon />
          </IconButton>
        </li>
      ))}
    </ul>
  );
}

export default SimpleCart;
