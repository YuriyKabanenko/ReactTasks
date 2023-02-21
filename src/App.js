import './App.css';
import { useState } from 'react';
import Header from './components/Header/header';
import ProductList from './components/ProductList/ProductList';
import { BrowserRoute, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import About from './components/About/About';
import Contact from './components/About/Contact/Contact';
import AddProduct from './components/Add product/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';

function App() {

  const [products, setProducts] = useState([
    { id: 1, title: 'Mleko', price: 28 },
    { id: 2, title: 'Yauzi', price: 6 },
    { id: 3, title: 'Dzura', price: 150 }
  ]);

  const deleteProduct = (productId) => {
    const newProducts = products.filter((product) => product.id !== productId);
    setProducts(newProducts);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList />}>
          </Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/add' element={<AddProduct />} ></Route>
          <Route path='/edit' element={<EditProduct />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
