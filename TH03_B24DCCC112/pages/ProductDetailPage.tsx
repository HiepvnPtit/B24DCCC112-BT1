import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div>
        <p>Không tìm thấy sản phẩm</p>
        <Link to="/">Quay lại</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Chi tiết sản phẩm</h2>
      <p>Tên: {product.ten}</p>
      <p>Danh mục: {product.danhMuc}</p>
      <p>Giá: {product.gia}</p>
      <p>Số lượng: {product.soLuong}</p>
      <p>Mô tả: {product.moTa}</p>
      <Link to="/">Quay lại</Link>
    </div>
  );
}

export default ProductDetailPage;
