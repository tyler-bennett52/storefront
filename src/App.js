import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import StoreFront from './Components/StoreFront';
import Details from './Components/Details';
import Checkout from './Components/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<StoreFront />} />
          <Route exact path="/products/:id" element={<Details />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
