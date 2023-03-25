// categoryReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  selectedCategory: '',
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    clear: (state) => {
      state.categories = [];
      state.selectedCategory = '';
    },
  },
});

export const { changeCategory, setCategories, clear } = categorySlice.actions;
export default categorySlice.reducer;
