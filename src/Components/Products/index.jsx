import { connect } from 'react-redux';
import { Card, Box, Container } from '@mui/material';

const Products = ({ products, activeCategory }) => {
  return (
    <>
      <h1>{activeCategory}</h1>
      <Container>
        {activeCategory && products.map((product, index) => (
          <Card style={{width: '30%'}} key={`product-${index}`} variant="outlined">{product.name}</Card>
        ))}
      </Container>
    </>
  )
};


const mapStateToProps = ({ products }) => {
  return {
    products: products.products,
    activeCategory: products.activeCategory
  }
};

export default connect(mapStateToProps)(Products);

