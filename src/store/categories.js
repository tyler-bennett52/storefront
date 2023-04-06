const initialState = {
  categories: [],
  selectedCategory: '',
};

const categoryReducer = (state = initialState, action) => {

  switch(action.type){
    case 'change-category':
      return {
        ...state,
        selectedCategory: action.payload,
      }
    case 'get-categories':
      return {
        ...state,
        categories: action.payload
      }
    case 'clear':
      return initialState;
    default:
      return state
  }
};

export default categoryReducer;