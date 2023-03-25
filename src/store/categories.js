// categoryReducer.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const response = await fetch('https://api-js401.herokuapp.com/api/v1/categories');
    const data = await response.json();
    return data.results;
  }
);

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
