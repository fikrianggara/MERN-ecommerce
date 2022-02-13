import Home from './pages/Home';
import ProductList from './pages/ProductList';
import NoPage from './pages/NoPage';
import Product from './pages/ProductDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path='product/:category/:id' element={<Product/>}></Route>
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
