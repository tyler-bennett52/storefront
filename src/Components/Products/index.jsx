import { useDispatch, useSelector } from 'react-redux';
import { Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import { addItem, decrementProduct } from '../../store/actions';

const Products = () => {
  const dispatch = useDispatch()
  const {products, selectedCategory} = useSelector(state => state.activeCategory)

  function addToCart(product) {
    dispatch(addItem(product));
    dispatch(decrementProduct(product));
  }
  return (
    <>
      <h1 data-testid="selected-category">{selectedCategory}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '80%', margin: '0 auto', rowGap: '5vh' }}>
        {selectedCategory && products.map((product, index) => (
          <Card style={{ width: 'fit-content', display: 'inline-block' }} key={`product-${index}`} variant="outlined">
            <Typography variant='h5' >{product.name} {product.inStock ? (`(${product.inStock})`) : null}</Typography>
            <CardMedia sx={{ height: 300, width: 300 }} image='https://placehold.co/300x300' />
            <CardActionArea onClick={() => addToCart(product)}><Typography variant='h6' color='text.secondary'>Add to cart</Typography></CardActionArea>
            <CardActionArea ><Typography variant='h6' color='text.secondary'>Show Details</Typography></CardActionArea>
          </Card>
        ))}
      </div>
    </>
  )
};



export default Products;

