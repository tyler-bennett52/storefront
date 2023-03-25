import { useDispatch, useSelector } from 'react-redux';
import { clear, changeCategory } from '../../store/active-category';
import { ButtonGroup, Button } from '@mui/material';

const Categories = (props) => {
  const { categories } = useSelector(state => state.activeCategory)
  const dispatch = useDispatch()

  return (
    <>
      <ButtonGroup color='secondary' variant='contained' aria-label="text button group" style={{display:'inline'}}>
        {categories.map((category, index) => (
          <Button key={`categories-${index}`} onClick={() => dispatch(changeCategory(category.name))}>{category.displayName}</Button>
        ))}
        <Button onClick={() => dispatch(clear)}>Reset</Button>
      </ButtonGroup>
    </>
  )
};


export default Categories;
