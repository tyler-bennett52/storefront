import { useDispatch, useSelector } from 'react-redux';
import { changeCategory, getCategories } from '../../store/actions';
import { ButtonGroup, Button } from '@mui/material';
import { useEffect } from 'react';

const Categories = (props) => {
  const { categories } = useSelector(state => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <ButtonGroup color='secondary' variant='contained' aria-label="text button group" style={{display:'inline'}}>
        {categories.map((category, index) => (
          <Button key={`categories-${index}`} onClick={() => dispatch(changeCategory(category.name))}>{category.name}</Button>
        ))}
      </ButtonGroup>
    </>
  )
};


export default Categories;
