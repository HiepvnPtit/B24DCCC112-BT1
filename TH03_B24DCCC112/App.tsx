import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';

function App() {
  return (
    <div>
      <h1>Quản lý sản phẩm</h1>
      <nav>
        <Link to="/">Trang chủ</Link> | <Link to="/add">Thêm sản phẩm</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
