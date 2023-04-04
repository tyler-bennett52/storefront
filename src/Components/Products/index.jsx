import { connect, useDispatch } from 'react-redux';
import { Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import { addItem } from '../../store/cart';

const Products = ({ products, selectedCategory }) => {
  const dispatch = useDispatch()
  return (
    <>
      <h1 data-testid="selected-category">{selectedCategory}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '80%', margin: '0 auto', rowGap: '5vh' }}>
        {selectedCategory && products.map((product, index) => (
          <Card style={{ width: 'fit-content', display: 'inline-block' }} key={`product-${index}`} variant="outlined">
            <Typography variant='h5' >{product.name}</Typography>
            <CardMedia sx={{ height: 300, width: 300 }} image='https://placehold.co/300x300' />
            <CardActionArea onClick={() => dispatch(addItem(product))}><Typography variant='h6' color='text.secondary'>Add to cart</Typography></CardActionArea>
            <CardActionArea ><Typography variant='h6' color='text.secondary'>Show Details</Typography></CardActionArea>
          </Card>
        ))}
      </div>
    </>
  )
};


const mapStateToProps = ({ activeCategory }) => {
  return {
    products: activeCategory.products,
    selectedCategory: activeCategory.selectedCategory
  }
};

export default connect(mapStateToProps)(Products);

