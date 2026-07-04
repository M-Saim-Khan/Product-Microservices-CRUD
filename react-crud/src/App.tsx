import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './admin/Products';
import Main from './main/main';
import ProductsCreate from './admin/ProductsCreate';
import ProductsEdit from './admin/ProductsEdit';

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/admin/products" element={<Products />} />
            <Route path="/" element={<Main />} />
            <Route path="/admin/products/create" element={<ProductsCreate />}/>
            <Route path="/admin/products/:id/edit" element={<ProductsEdit />}/>

          </Routes>
        </BrowserRouter>
      </>

    </div>
  );
}

export default App;
