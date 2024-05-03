import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Trending from './pages/Trending';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './components/Product';
import Card from './components/Card';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Product />
        <Card />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
