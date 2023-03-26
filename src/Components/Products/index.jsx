import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActionArea, CardMedia, Typography } from '@mui/material';
// import { addItem, decrementProduct, getProducts } from '../../store/actions';
import { addToCart as addItem } from '../../store/cart';
import { getProducts } from '../../store/actions';
import { decrementStock as decrementProduct } from '../../store/products';


import { useEffect } from 'react';

const Products = () => {
  const dispatch = useDispatch()
  const { selectedCategory } = useSelector(state => state.categories)
  const { products } = useSelector(state => state.products)

  function addToCart(product) {
    dispatch(addItem(product));
    dispatch(decrementProduct(product));
  }
  useEffect(() => {
    dispatch(getProducts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 data-testid="selected-category">{selectedCategory}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '80%', margin: '0 auto', rowGap: '5vh' }}>
        {selectedCategory && products.map((product, index) => {
          if (product.category === selectedCategory) {
            if (product.inStock > 0) {
            return (
              <Card style={{ width: 'fit-content', display: 'inline-block' }} key={`product-${index}`} variant="outlined">
                <Typography variant='h5' >{product.name} {product.inStock ? (`(${product.inStock})`) : null}</Typography>
                <CardMedia sx={{ height: 300, width: 300 }} image='https://placehold.co/300x300' />
                <CardActionArea onClick={() => addToCart(product)}><Typography variant='h6' color='text.secondary'>Add to cart</Typography></CardActionArea>
                <CardActionArea ><Typography variant='h6' color='text.secondary'>Show Details</Typography></CardActionArea>
              </Card>
            )
            } else {
              return (
                <Card style={{ width: 'fit-content', display: 'inline-block' }} key={`product-${index}`} variant="outlined">
                <Typography variant='h5' >{product.name} {product.inStock ? (`(0)`) : null}</Typography>
                <CardMedia sx={{ height: 300, width: 300 }} image='https://placehold.co/300x300' />
                <CardActionArea ><Typography variant='h6' color='text.secondary'>Out of Stock</Typography></CardActionArea>
                <CardActionArea ><Typography variant='h6' color='text.secondary'>Show Details</Typography></CardActionArea>
              </Card>
              )
            }
          } else return null;
        })}
      </div>
    </>
  )
};



export default Products;

