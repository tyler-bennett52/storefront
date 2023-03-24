import { connect } from 'react-redux';
import { changeCategory, clear } from '../../store/reducer';
import { ButtonGroup, Button } from '@mui/material';

const Categories = (props) => {
  const { changeCategory, clear, categories } = props;

  return (
    <>
      <ButtonGroup color='secondary' variant='contained' aria-label="text button group">
        {categories.map((category, index) => (
          <Button key={`categories-${index}`} onClick={() => changeCategory(category.name)}>{category.displayName}</Button>
        ))}
        <Button onClick={clear}>Reset</Button>
      </ButtonGroup>
    </>
  )
};

const mapStateToProps = ({ products }) => {
  return {
    categories: products.categories,
  }
};

const mapDispatchToProps = { changeCategory, clear };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
