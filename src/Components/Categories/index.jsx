import { connect } from 'react-redux';
import { changeCategory } from '../../store/reducer';
import { ButtonGroup, Button } from '@mui/material';

const Categories = (props) => {
  const { categories, changeCategory } = props;

  return (
    <>
      <ButtonGroup variant="text" aria-label="text button group">
        {categories.map((category, index) => (
          <Button key={`categories-${index}`} onClick={() => changeCategory(category.name)}>{category.displayName}</Button>
        ))}
      </ButtonGroup>
    </>
  )
};

const mapStateToProps = ({ products }) => {
  return {
    categories: products.categories,
  }
};

const mapDispatchToProps = {
  changeCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
