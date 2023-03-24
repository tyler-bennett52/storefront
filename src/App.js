import './App.css';
import NavBar from './Components/NavBar';
// import Header from './Components/Header';
import Categories from './Components/Categories';
import Products from './Components/Products';

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <Categories /> 
      <Products />
    </div>
  );
}

export default App;
