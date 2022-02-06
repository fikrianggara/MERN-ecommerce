import Home from './pages/Home';
import ProductList from './pages/ProductList';
import NoPage from './pages/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="product-list" element={<ProductList />} />
          <Route path="*" element={<NoPage />} />
          <Route path="uwu" element={<NoPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
