const initialState = [];

const productsReducer = (state = initialState, action) => {
  switch(action.type){
    case 'get-products':
      return action.payload;
    case 'update-products':
      return state.map(product => product.name !== action.payload.name ? product : action.payload);
    default:
      return state
  }
};


export default productsReducer;

