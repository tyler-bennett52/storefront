import './App.css';
import NavBar from './Components/NavBar';
// import Header from './Components/Header';
import Categories from './Components/Categories';
import Products from './Components/Products';
import Footer from './Components/Footer';
import SimpleCart from './Components/SimpleCart';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SimpleCart />
      <Categories /> 
      <Products />
      <Footer />
    </div>
  );
}

export default App;
