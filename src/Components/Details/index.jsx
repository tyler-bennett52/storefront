import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Details = () => {
  const { products } = useSelector(state => state.products);
  const { id } = useParams();

  const selectedProduct = products.find(product => product._id === id);
  console.log('SelectedProduct', selectedProduct);
  console.log('ID', id)

  return ( 
    <div className="Details" style={{display: 'flex', flexDirection: 'column'}}>
  <Typography variant="h2">{selectedProduct.name}</Typography>
  <Typography variant="h4">Category: {selectedProduct.category}</Typography>
  <Typography variant="h4">Still in Stock: {selectedProduct.inStock}</Typography>
  <Typography variant="h4">Price: {selectedProduct.price}</Typography>
    </div>
   );
}
 
export default Details;