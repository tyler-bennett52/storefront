import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addToCart as addItem } from '../../store/cart';
import { decrementStock as decrementProduct } from "../../store/products";
import { Button } from "@mui/material";


const Details = () => {
  const { products } = useSelector(state => state.products);
  const dispatch = useDispatch()
  const { id } = useParams();

  function addToCart(product) {
    dispatch(addItem(product));
    dispatch(decrementProduct(product));
  }

  const selectedProduct = products.find(product => product._id === id);

  return ( 
    <div className="Details" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
  <Typography variant="h2">{selectedProduct.name}</Typography>
  <Typography variant="h4">Category: {selectedProduct.category}</Typography>
  <Typography variant="h4">Still in Stock: {selectedProduct.inStock}</Typography>
  <Typography variant="h4">Price: {selectedProduct.price}</Typography>
  <Button sx={{width: '30%'}} color="secondary" variant="contained" onClick={() => addToCart(selectedProduct)}>Add to Cart</Button>
    </div>
   );
}
 
export default Details;